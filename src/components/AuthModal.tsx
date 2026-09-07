import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  School, 
  Mail, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  KeyRound,
  ShieldCheck,
  Check,
  Database,
  Loader2
} from 'lucide-react';
import { StudentUser } from '../types';
import { registerStudent, loginStudent } from '../data/mockDatabase';
import { isSupabaseConfigured, registerWithSupabase, loginWithSupabase } from '../lib/supabase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'register';
  onAuthSuccess: (user: StudentUser) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode,
  onAuthSuccess
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [isLoading, setIsLoading] = useState(false);
  const supabaseActive = isSupabaseConfigured();
  
  // Registration Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [classGrade, setClassGrade] = useState<number>(8);
  const [schoolName, setSchoolName] = useState('');
  
  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [infoNotice, setInfoNotice] = useState('');

  if (!isOpen) return null;

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setInfoNotice('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full student name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify and confirm your password.');
      return;
    }

    setIsLoading(true);

    if (supabaseActive) {
      const res = await registerWithSupabase(
        name.trim(),
        email.trim(),
        password,
        Number(classGrade),
        schoolName.trim() || 'Central Model Academy'
      );
      setIsLoading(false);

      if (res.success && res.user) {
        if (res.message) {
          setInfoNotice(res.message);
        }
        onAuthSuccess(res.user);
        onClose();
      } else {
        setErrorMsg(res.error || 'Failed to create student account via Supabase.');
      }
    } else {
      // Local demo fallback
      const newUser = registerStudent(
        name.trim(),
        email.trim(),
        password,
        Number(classGrade),
        schoolName.trim() || 'Central Model Academy'
      );
      setIsLoading(false);
      onAuthSuccess(newUser);
      onClose();
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setInfoNotice('');

    if (!loginEmail.trim()) {
      setErrorMsg('Please enter your registered email address.');
      return;
    }
    if (!loginPassword) {
      setErrorMsg('Please enter your student password.');
      return;
    }

    setIsLoading(true);

    if (supabaseActive) {
      const res = await loginWithSupabase(loginEmail.trim(), loginPassword);
      setIsLoading(false);

      if (res.success && res.user) {
        onAuthSuccess(res.user);
        onClose();
      } else {
        setErrorMsg(res.error || 'Supabase authentication failed. Please check your email and password.');
      }
    } else {
      const result = loginStudent(loginEmail.trim(), loginPassword);
      setIsLoading(false);

      if (result.success && result.user) {
        onAuthSuccess(result.user);
        onClose();
      } else {
        setErrorMsg(result.error || 'Authentication failed. Please check your email and password.');
      }
    }
  };

  const fillDemoAccount = (demoEmail: string, demoPass: string) => {
    setLoginEmail(demoEmail);
    setLoginPassword(demoPass);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        id="auth-modal-card"
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-br from-indigo-600 to-blue-700 p-6 text-white text-center">
          <button
            id="close-auth-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white ring-4 ring-white/10 shadow-lg">
            <GraduationCap className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold tracking-tight">
            {mode === 'login' ? 'Welcome Back, Student!' : 'Create Student Profile'}
          </h3>
          <p className="text-xs text-indigo-100 mt-1 max-w-sm mx-auto">
            {mode === 'login' 
              ? 'Enter your registered student email and password to access your personalized curriculum.' 
              : 'Sign up with your credentials and select your enrolled class (1 to 10) for automated course filtering.'}
          </p>

          {/* Supabase Status Pill */}
          <div className="mt-3 flex items-center justify-center">
            {supabaseActive ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-[11px] font-semibold shadow-xs">
                <Database className="w-3.5 h-3.5 text-emerald-300" />
                <span>Supabase Cloud Auth Active</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 text-indigo-200 border border-indigo-400/20 text-[11px] font-medium shadow-xs">
                <Database className="w-3.5 h-3.5 text-indigo-300" />
                <span>Supabase Integration Ready (Local & Cloud Sync Supported)</span>
              </div>
            )}
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-indigo-900/40 p-1 rounded-xl max-w-xs mx-auto mt-4">
            <button
              id="tab-login-btn"
              onClick={() => {
                setMode('login');
                setErrorMsg('');
                setInfoNotice('');
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                mode === 'login' ? 'bg-white text-indigo-950 shadow-xs' : 'text-indigo-200 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              id="tab-register-btn"
              onClick={() => {
                setMode('register');
                setErrorMsg('');
                setInfoNotice('');
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                mode === 'register' ? 'bg-white text-indigo-950 shadow-xs' : 'text-indigo-200 hover:text-white'
              }`}
            >
              New Registration
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {errorMsg && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 font-medium flex items-start gap-2 animate-in fade-in">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1" />
              <span>{errorMsg}</span>
            </div>
          )}

          {infoNotice && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-700 font-medium flex items-start gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{infoNotice}</span>
            </div>
          )}

          {mode === 'register' ? (
            /* Registration Form with Password Protection */
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="register-name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Aarav Sharma"
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-hidden transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="register-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@school.edu"
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-hidden transition-all"
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Create Password <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="register-password-input"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 6 characters"
                      className="w-full pl-10 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-hidden transition-all"
                    />
                    <button
                      type="button"
                      id="toggle-register-password-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-1.5 text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors"
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Confirm Password <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="register-confirm-password-input"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                      className="w-full pl-10 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-hidden transition-all"
                    />
                    <button
                      type="button"
                      id="toggle-register-confirm-password-btn"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="p-1.5 text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors"
                      title={showConfirmPassword ? 'Hide password' : 'Show password'}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Password Match / Strength Indicator */}
              {password && (
                <div className="flex items-center gap-3 text-[11px] text-slate-500 px-1">
                  <span className={`flex items-center gap-1 ${password.length >= 6 ? 'text-emerald-600 font-semibold' : 'text-slate-400'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${password.length >= 6 ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    6+ characters
                  </span>
                  {confirmPassword && (
                    <span className={`flex items-center gap-1 ${password === confirmPassword ? 'text-emerald-600 font-semibold' : 'text-rose-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${password === confirmPassword ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                      {password === confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                    </span>
                  )}
                </div>
              )}

              {/* Crucial Class / Grade Selector */}
              <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Select Enrolled Class / Grade (Classes 1 to 10) <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded-full border border-indigo-200">
                    Class {classGrade}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mb-3">
                  The portal will curate all subjects, reading notes, practice exercises, and chapter quizzes to this grade.
                </p>

                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
                    <button
                      type="button"
                      key={grade}
                      onClick={() => setClassGrade(grade)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                        classGrade === grade
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105 ring-2 ring-indigo-600'
                          : 'bg-white hover:bg-indigo-100/60 text-slate-700 border border-indigo-100'
                      }`}
                    >
                      Class {grade}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  School Name (Optional)
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="register-school-input"
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="e.g., Delhi Public School / St. Xavier"
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-hidden transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="submit-register-btn"
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-200 hover:shadow-indigo-300 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Student Account & Unlock Class {classGrade}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Login Form with Password Authentication */
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Registered Student Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="login-email-input"
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="aarav.sharma@campus.edu"
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-hidden transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Student Password
                  </label>
                  <span className="text-[11px] text-indigo-600">
                    Case-sensitive
                  </span>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="login-password-input"
                    type={showLoginPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter your student password"
                    className="w-full pl-10 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-hidden transition-all"
                  />
                  <button
                    type="button"
                    id="toggle-login-password-btn"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors"
                    title={showLoginPassword ? 'Hide password' : 'Show password'}
                  >
                    {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Quick Demo Fill Helper */}
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-600 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                    Quick Demo Credentials (pass: <code className="bg-white px-1.5 py-0.5 rounded text-indigo-700 font-mono border border-slate-200">pass123</code>):
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => fillDemoAccount('aarav.sharma@campus.edu', 'pass123')}
                    className="px-2.5 py-1 text-[11px] bg-white hover:bg-indigo-50 border border-slate-200 rounded-lg text-slate-700 transition-colors"
                  >
                    Aarav (Class 8)
                  </button>
                  <button
                    type="button"
                    onClick={() => fillDemoAccount('ananya.verma@campus.edu', 'pass123')}
                    className="px-2.5 py-1 text-[11px] bg-white hover:bg-indigo-50 border border-slate-200 rounded-lg text-slate-700 transition-colors"
                  >
                    Ananya (Class 10)
                  </button>
                  <button
                    type="button"
                    onClick={() => fillDemoAccount('diya.sen@campus.edu', 'pass123')}
                    className="px-2.5 py-1 text-[11px] bg-white hover:bg-indigo-50 border border-slate-200 rounded-lg text-slate-700 transition-colors"
                  >
                    Diya (Class 6)
                  </button>
                </div>
              </div>

              <button
                type="submit"
                id="submit-login-btn"
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-semibold rounded-xl shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Student Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
