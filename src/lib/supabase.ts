import { createClient, SupabaseClient, User as SupabaseUser } from '@supabase/supabase-js';
import { StudentUser, QuizSubmission } from '../types';
import { getTodayDateString } from '../utils/studentProgressTracker';

// Read Vite environment variables with project credentials fallback
const DEFAULT_SUPABASE_URL = 'https://drvesytgqvieyakwurwg.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_tGh7hQqzaEh7XBq_OKWXeg_YvjUA4TW';

export const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL).trim();
export const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY).trim();

// Detect if valid configuration is present (not placeholder)
export const isSupabaseConfigured = (): boolean => {
  return (
    typeof supabaseUrl === 'string' &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('your-project') &&
    typeof supabaseAnonKey === 'string' &&
    supabaseAnonKey.length > 20 &&
    !supabaseAnonKey.includes('your-anon-key')
  );
};

// Create client lazily
let clientInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!clientInstance) {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    });
  }
  return clientInstance;
};

// Map Supabase Auth User & Metadata to StudentUser
export const mapSupabaseUserToStudent = (
  sbUser: SupabaseUser,
  profileData?: any
): StudentUser => {
  const metadata = sbUser.user_metadata || {};
  const today = getTodayDateString();

  return {
    id: sbUser.id,
    name: profileData?.name || metadata.name || metadata.full_name || sbUser.email?.split('@')[0] || 'Student',
    email: sbUser.email || metadata.email || '',
    classGrade: Number(profileData?.class_grade || metadata.class_grade || metadata.classGrade || 8),
    avatar: profileData?.avatar || metadata.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(sbUser.email || 'student')}`,
    rollNumber: profileData?.roll_number || metadata.roll_number || `GR-${metadata.class_grade || 8}-${sbUser.id.substring(0, 4).toUpperCase()}`,
    schoolName: profileData?.school_name || metadata.school_name || 'Central Model Academy',
    joinedDate: profileData?.joined_date || metadata.joined_date || 'September 2026',
    completedChapterIds: profileData?.completed_chapter_ids || metadata.completed_chapter_ids || [],
    bookmarkedChapterIds: profileData?.bookmarked_chapter_ids || metadata.bookmarked_chapter_ids || [],
    quizHistory: profileData?.quiz_history || metadata.quiz_history || [],
    studyStreakDays: Number(profileData?.study_streak_days || metadata.study_streak_days || 1),
    studyGoalHoursPerWeek: Number(profileData?.study_goal_hours || metadata.study_goal_hours || 10),
    lastActiveDate: profileData?.last_active_date || metadata.last_active_date || today,
    activeDates: profileData?.active_dates || metadata.active_dates || [today],
    lastActivityTimestamp: Date.now()
  };
};

/**
 * Register student with Supabase Auth
 */
export const registerWithSupabase = async (
  name: string,
  email: string,
  password: string,
  classGrade: number,
  schoolName: string
): Promise<{ success: boolean; user?: StudentUser; error?: string; message?: string }> => {
  const client = getSupabaseClient();
  if (!client) {
    return {
      success: false,
      error: 'Supabase credentials not configured in environment variables (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY).'
    };
  }

  try {
    const today = getTodayDateString();
    const rollNumber = `GR-${classGrade}-${Math.floor(10 + Math.random() * 89)}`;
    const avatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`;

    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          class_grade: classGrade,
          school_name: schoolName,
          roll_number: rollNumber,
          avatar,
          study_streak_days: 1,
          completed_chapter_ids: [],
          bookmarked_chapter_ids: [],
          quiz_history: [],
          active_dates: [today]
        }
      }
    });

    if (error) {
      return { success: false, error: error.message };
    }

    if (!data.user) {
      return { success: false, error: 'Registration succeeded but no user data was returned.' };
    }

    // Attempt optional profiles table upsert if table exists
    try {
      await client.from('profiles').upsert({
        id: data.user.id,
        email: data.user.email,
        name,
        class_grade: classGrade,
        school_name: schoolName,
        roll_number: rollNumber,
        avatar,
        study_streak_days: 1,
        active_dates: [today],
        updated_at: new Date().toISOString()
      });
    } catch {
      // Ignored if custom profiles table is not yet created in Supabase
    }

    const studentUser = mapSupabaseUserToStudent(data.user);

    // If email confirmation is required by Supabase project settings
    if (!data.session) {
      return {
        success: true,
        user: studentUser,
        message: 'Account created! Please check your email to confirm registration or sign in.'
      };
    }

    return {
      success: true,
      user: studentUser
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message || 'An unexpected error occurred during Supabase registration.'
    };
  }
};

/**
 * Sign In student with Supabase Auth
 */
export const loginWithSupabase = async (
  email: string,
  password: string
): Promise<{ success: boolean; user?: StudentUser; error?: string }> => {
  const client = getSupabaseClient();
  if (!client) {
    return {
      success: false,
      error: 'Supabase credentials not configured in environment variables.'
    };
  }

  try {
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return { success: false, error: error.message };
    }

    if (!data.user) {
      return { success: false, error: 'User authenticated, but profile information could not be retrieved.' };
    }

    // Try reading from 'profiles' table if it exists
    let profileData: any = null;
    try {
      const { data: pData } = await client
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();
      if (pData) {
        profileData = pData;
      }
    } catch {
      // Fallback to auth metadata
    }

    const studentUser = mapSupabaseUserToStudent(data.user, profileData);
    return {
      success: true,
      user: studentUser
    };
  } catch (err: any) {
    return {
      success: false,
      error: err.message || 'An unexpected error occurred during Supabase login.'
    };
  }
};

/**
 * Sign out from Supabase Auth
 */
export const signOutSupabase = async (): Promise<void> => {
  const client = getSupabaseClient();
  if (client) {
    await client.auth.signOut();
  }
};

/**
 * Sync student academic progress (completed chapters, quiz submissions, streak) to Supabase
 */
export const syncProgressToSupabase = async (user: StudentUser): Promise<void> => {
  const client = getSupabaseClient();
  if (!client) return;

  try {
    // 1. Update user metadata in Auth
    await client.auth.updateUser({
      data: {
        class_grade: user.classGrade,
        completed_chapter_ids: user.completedChapterIds,
        bookmarked_chapter_ids: user.bookmarkedChapterIds,
        quiz_history: user.quizHistory,
        study_streak_days: user.studyStreakDays,
        study_goal_hours: user.studyGoalHoursPerWeek,
        last_active_date: user.lastActiveDate,
        active_dates: user.activeDates
      }
    });

    // 2. Try updating 'profiles' table if created
    await client.from('profiles').upsert({
      id: user.id,
      email: user.email,
      name: user.name,
      class_grade: user.classGrade,
      roll_number: user.rollNumber,
      school_name: user.schoolName,
      avatar: user.avatar,
      completed_chapter_ids: user.completedChapterIds,
      bookmarked_chapter_ids: user.bookmarkedChapterIds,
      quiz_history: user.quizHistory,
      study_streak_days: user.studyStreakDays,
      active_dates: user.activeDates,
      updated_at: new Date().toISOString()
    });
  } catch (err) {
    // Non-blocking background sync
    console.warn('Background Supabase sync notice:', err);
  }
};
