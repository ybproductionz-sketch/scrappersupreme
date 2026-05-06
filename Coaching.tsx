import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CoachStatus = 'none' | 'applicant' | 'candidate' | 'apprentice' | 'certified' | 'senior' | 'master';

export interface CoachingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
  completed: boolean;
  completedAt?: string;
}

export interface CoachingApplication {
  status: CoachStatus;
  appliedAt: string | null;
  approvedAt: string | null;
  assignedMentor: string | null;
  modules: CoachingModule[];
  quizScores: Record<string, number>;
  totalStudentsCoached: number;
  revenueEarned: number;
  rating: number;
  reviewCount: number;
}

export const COACHING_MODULES: CoachingModule[] = [
  {
    id: 'mastery-verification',
    title: 'Mastery Verification',
    description: 'Demonstrate complete understanding of all 48 Laws with 95%+ scores',
    duration: 'Self-paced',
    requirements: ['Score 95%+ on all 48 law quizzes', 'Complete all reflections', 'Pass comprehensive final exam'],
    completed: false,
  },
  {
    id: 'character-assessment',
    title: 'Character Assessment',
    description: 'Background verification and interview with senior coaches',
    duration: '2-3 weeks',
    requirements: ['Background check', 'Video interview', 'Reference verification'],
    completed: false,
  },
  {
    id: 'coaching-fundamentals',
    title: 'Coaching Fundamentals',
    description: 'Learn the methodology of teaching the Laws effectively',
    duration: '4 weeks',
    requirements: ['Complete training modules', 'Practice sessions', 'Peer evaluation'],
    completed: false,
  },
  {
    id: 'apprenticeship',
    title: '90-Day Apprenticeship',
    description: 'Shadow certified coaches and lead practice sessions',
    duration: '90 days',
    requirements: ['Shadow 20+ sessions', 'Lead 10+ practice sessions', 'Receive positive evaluations'],
    completed: false,
  },
  {
    id: 'certification',
    title: 'Official Certification',
    description: 'Receive authorization to coach under the Academy brand',
    duration: 'Final review',
    requirements: ['Complete all modules', 'Pass final assessment', 'Sign coach agreement'],
    completed: false,
  },
];

export const COACH_TIER_INFO: Record<CoachStatus, { title: string; badge: string; maxRate: number; revenueShare: number }> = {
  none: { title: 'Not Applied', badge: '', maxRate: 0, revenueShare: 0 },
  applicant: { title: 'Applicant', badge: '⏳', maxRate: 0, revenueShare: 0 },
  candidate: { title: 'Candidate', badge: '📋', maxRate: 0, revenueShare: 0 },
  apprentice: { title: 'Coach Apprentice', badge: '🎓', maxRate: 50, revenueShare: 50 },
  certified: { title: 'Certified Coach', badge: '✓', maxRate: 150, revenueShare: 70 },
  senior: { title: 'Senior Coach', badge: '★', maxRate: 300, revenueShare: 75 },
  master: { title: 'Master Coach', badge: '👑', maxRate: 500, revenueShare: 80 },
};

interface CoachStore extends CoachingApplication {
  apply: () => void;
  completeModule: (moduleId: string) => void;
  updateQuizScore: (lawId: string, score: number) => void;
  getProgress: () => number;
  canApply: () => { eligible: boolean; reason: string };
}

export const useCoachStore = create<CoachStore>()(
  persist(
    (set, get) => ({
      status: 'none',
      appliedAt: null,
      approvedAt: null,
      assignedMentor: null,
      modules: COACHING_MODULES,
      quizScores: {},
      totalStudentsCoached: 0,
      revenueEarned: 0,
      rating: 0,
      reviewCount: 0,

      apply: () => {
        set({
          status: 'applicant',
          appliedAt: new Date().toISOString(),
        });
      },

      completeModule: (moduleId: string) => {
        set((state) => ({
          modules: state.modules.map((m) =>
            m.id === moduleId ? { ...m, completed: true, completedAt: new Date().toISOString() } : m
          ),
        }));
      },

      updateQuizScore: (lawId: string, score: number) => {
        set((state) => ({
          quizScores: { ...state.quizScores, [lawId]: score },
        }));
      },

      getProgress: () => {
        const { modules } = get();
        const completed = modules.filter((m) => m.completed).length;
        return Math.round((completed / modules.length) * 100);
      },

      canApply: () => {
        // In a real app, this would check the user's tier and quiz scores
        return { eligible: true, reason: '' };
      },
    }),
    {
      name: 'pimpology-coach-storage',
    }
  )
);
