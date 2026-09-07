-- =========================================================
-- Supabase Database Schema for Student Learning Portal
-- Run this in your Supabase Dashboard: SQL Editor -> New Query
-- =========================================================

-- 1. Create Student Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  class_grade INTEGER NOT NULL DEFAULT 8 CHECK (class_grade >= 1 AND class_grade <= 10),
  roll_number TEXT,
  school_name TEXT,
  avatar TEXT,
  completed_chapter_ids TEXT[] DEFAULT '{}',
  bookmarked_chapter_ids TEXT[] DEFAULT '{}',
  quiz_history JSONB DEFAULT '[]'::jsonb,
  study_streak_days INTEGER DEFAULT 1,
  study_goal_hours INTEGER DEFAULT 10,
  last_active_date TEXT,
  active_dates TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS) for Industry-Standard Protection
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Students can view their own profile
CREATE POLICY "Students can view own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);

-- 4. Policy: Students can update their own profile
CREATE POLICY "Students can update own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id);

-- 5. Policy: Students can insert their own profile
CREATE POLICY "Students can insert own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = id);

-- 6. Trigger: Automatically create profile on new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id, 
    email, 
    name, 
    class_grade, 
    roll_number, 
    school_name, 
    avatar, 
    study_streak_days,
    created_at, 
    updated_at
  )
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    COALESCE((new.raw_user_meta_data->>'class_grade')::integer, 8),
    COALESCE(new.raw_user_meta_data->>'roll_number', 'GR-8-01'),
    COALESCE(new.raw_user_meta_data->>'school_name', 'National Model Academy'),
    COALESCE(new.raw_user_meta_data->>'avatar', 'https://api.dicebear.com/7.x/bottts/svg?seed=' || new.id),
    1,
    now(),
    now()
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Hook the trigger to auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
