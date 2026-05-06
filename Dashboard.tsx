import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface QuizScore {
  lawId: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
}

export interface Achievement {
  id: string;
  unlockedAt: string;
}

export interface UserProgress {
  totalXP: number;
  level: number;
  streak: number;
  lastLogin: string;
  completedLaws: string[];
  quizScores: QuizScore[];
  achievements: Achievement[];
  dailyChallengeCompleted: boolean;
  lastDailyChallengeDate: string;
  lawReadingProgress: Record<string, number>;
  favoriteLaws: string[];
}

interface GameState extends UserProgress {
  // Actions
  addXP: (amount: number) => void;
  completeLaw: (lawId: string) => void;
  addQuizScore: (score: QuizScore) => void;
  unlockAchievement: (achievementId: string) => void;
  updateStreak: () => void;
  completeDailyChallenge: () => void;
  updateLawReadingProgress: (lawId: string, progress: number) => void;
  toggleFavoriteLaw: (lawId: string) => void;
  resetProgress: () => void;
  
  // Getters
  getLevelProgress: () => { currentXP: number; requiredXP: number; progress: number };
  getLawMastery: (lawId: string) => 'none' | 'bronze' | 'silver' | 'gold';
  getTotalLawsCompleted: () => number;
  getTotalQuizzesTaken: () => number;
  getAverageQuizScore: () => number;
  getAchievementCount: () => number;
}

// XP required for each level (exponential growth)
const getRequiredXP = (level: number): number => {
  return Math.floor(100 * Math.pow(level, 1.5));
};

// Level titles
export const getLevelTitle = (level: number): string => {
  if (level >= 50) return 'Grand Master';
  if (level >= 45) return 'Legend';
  if (level >= 40) return 'Icon';
  if (level >= 35) return 'Mogul';
  if (level >= 30) return 'Tycoon';
  if (level >= 25) return 'Boss';
  if (level >= 20) return 'Captain';
  if (level >= 15) return 'Lieutenant';
  if (level >= 10) return 'Sergeant';
  if (level >= 5) return 'Corporal';
  return 'Recruit';
};

// Achievement definitions
export const ACHIEVEMENTS = [
  // Learning achievements
  { id: 'first-law', name: 'First Steps', description: 'Complete your first law', category: 'learning', rarity: 'common', requirement: 1 },
  { id: 'law-novice', name: 'Novice Scholar', description: 'Complete 5 laws', category: 'learning', rarity: 'common', requirement: 5 },
  { id: 'law-adept', name: 'Adept Student', description: 'Complete 10 laws', category: 'learning', rarity: 'common', requirement: 10 },
  { id: 'law-scholar', name: 'Master Scholar', description: 'Complete 25 laws', category: 'learning', rarity: 'rare', requirement: 25 },
  { id: 'law-master', name: 'Law Master', description: 'Complete all 48 laws', category: 'learning', rarity: 'epic', requirement: 48 },
  
  // Quiz achievements
  { id: 'first-quiz', name: 'Quiz Taker', description: 'Complete your first quiz', category: 'quiz', rarity: 'common', requirement: 1 },
  { id: 'quiz-novice', name: 'Quiz Novice', description: 'Complete 5 quizzes', category: 'quiz', rarity: 'common', requirement: 5 },
  { id: 'quiz-master', name: 'Quiz Master', description: 'Complete 20 quizzes', category: 'quiz', rarity: 'rare', requirement: 20 },
  { id: 'perfect-score', name: 'Perfectionist', description: 'Get a perfect score on any quiz', category: 'quiz', rarity: 'rare', requirement: 1 },
  { id: 'quiz-expert', name: 'Quiz Expert', description: 'Complete all law quizzes', category: 'quiz', rarity: 'epic', requirement: 48 },
  
  // Streak achievements
  { id: 'streak-3', name: 'On Fire', description: 'Maintain a 3-day streak', category: 'streak', rarity: 'common', requirement: 3 },
  { id: 'streak-7', name: 'Week Warrior', description: 'Maintain a 7-day streak', category: 'streak', rarity: 'common', requirement: 7 },
  { id: 'streak-14', name: 'Two Week Titan', description: 'Maintain a 14-day streak', category: 'streak', rarity: 'rare', requirement: 14 },
  { id: 'streak-30', name: 'Monthly Master', description: 'Maintain a 30-day streak', category: 'streak', rarity: 'epic', requirement: 30 },
  { id: 'streak-100', name: 'Century Champion', description: 'Maintain a 100-day streak', category: 'streak', rarity: 'legendary', requirement: 100 },
  
  // Level achievements
  { id: 'level-5', name: 'Rising Star', description: 'Reach level 5', category: 'level', rarity: 'common', requirement: 5 },
  { id: 'level-10', name: 'Double Digits', description: 'Reach level 10', category: 'level', rarity: 'common', requirement: 10 },
  { id: 'level-25', name: 'Quarter Century', description: 'Reach level 25', category: 'level', rarity: 'rare', requirement: 25 },
  { id: 'level-50', name: 'Half Century', description: 'Reach level 50', category: 'level', rarity: 'epic', requirement: 50 },
  
  // Category achievements
  { id: 'category-power', name: 'Power Player', description: 'Complete all Power laws', category: 'special', rarity: 'rare', requirement: 1 },
  { id: 'category-wealth', name: 'Wealth Builder', description: 'Complete all Wealth laws', category: 'special', rarity: 'rare', requirement: 1 },
  { id: 'category-strategy', name: 'Strategist', description: 'Complete all Strategy laws', category: 'special', rarity: 'rare', requirement: 1 },
  { id: 'category-mindset', name: 'Mindset Master', description: 'Complete all Mindset laws', category: 'special', rarity: 'rare', requirement: 1 },
  
  // Special achievements
  { id: 'daily-7', name: 'Daily Devotee', description: 'Complete 7 daily challenges', category: 'special', rarity: 'rare', requirement: 7 },
  { id: 'daily-30', name: 'Daily Champion', description: 'Complete 30 daily challenges', category: 'special', rarity: 'epic', requirement: 30 },
  { id: 'speed-reader', name: 'Speed Learner', description: 'Complete 5 laws in one day', category: 'special', rarity: 'rare', requirement: 5 },
  { id: 'night-owl', name: 'Night Owl', description: 'Study after midnight', category: 'special', rarity: 'common', requirement: 1 },
  { id: 'early-bird', name: 'Early Bird', description: 'Study before 6 AM', category: 'special', rarity: 'common', requirement: 1 },
];

const initialState: UserProgress = {
  totalXP: 0,
  level: 1,
  streak: 0,
  lastLogin: new Date().toISOString(),
  completedLaws: [],
  quizScores: [],
  achievements: [],
  dailyChallengeCompleted: false,
  lastDailyChallengeDate: '',
  lawReadingProgress: {},
  favoriteLaws: [],
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...initialState,

      addXP: (amount: number) => {
        set((state) => {
          let newXP = state.totalXP + amount;
          let newLevel = state.level;
          
          // Check for level up
          while (newXP >= getRequiredXP(newLevel)) {
            newXP -= getRequiredXP(newLevel);
            newLevel++;
          }
          
          return { totalXP: newXP, level: newLevel };
        });
        
        // Check for level achievements
        const { level } = get();
        if (level >= 5) get().unlockAchievement('level-5');
        if (level >= 10) get().unlockAchievement('level-10');
        if (level >= 25) get().unlockAchievement('level-25');
        if (level >= 50) get().unlockAchievement('level-50');
      },

      completeLaw: (lawId: string) => {
        set((state) => ({
          completedLaws: state.completedLaws.includes(lawId)
            ? state.completedLaws
            : [...state.completedLaws, lawId],
        }));
        
        // Add XP for completing a law
        get().addXP(50);
        
        // Check for law achievements
        const { completedLaws } = get();
        if (completedLaws.length >= 1) get().unlockAchievement('first-law');
        if (completedLaws.length >= 5) get().unlockAchievement('law-novice');
        if (completedLaws.length >= 10) get().unlockAchievement('law-adept');
        if (completedLaws.length >= 25) get().unlockAchievement('law-scholar');
        if (completedLaws.length >= 48) get().unlockAchievement('law-master');
      },

      addQuizScore: (score: QuizScore) => {
        set((state) => ({
          quizScores: [...state.quizScores, score],
        }));
        
        // Add XP based on score
        const xpEarned = Math.floor((score.score / score.totalQuestions) * 20);
        get().addXP(xpEarned);
        
        // Check for perfect score
        if (score.score === score.totalQuestions) {
          get().unlockAchievement('perfect-score');
        }
        
        // Check for quiz achievements
        const { quizScores } = get();
        if (quizScores.length >= 1) get().unlockAchievement('first-quiz');
        if (quizScores.length >= 5) get().unlockAchievement('quiz-novice');
        if (quizScores.length >= 20) get().unlockAchievement('quiz-master');
        if (quizScores.length >= 48) get().unlockAchievement('quiz-expert');
      },

      unlockAchievement: (achievementId: string) => {
        set((state) => {
          if (state.achievements.find(a => a.id === achievementId)) {
            return state;
          }
          return {
            achievements: [...state.achievements, { id: achievementId, unlockedAt: new Date().toISOString() }],
          };
        });
        
        // Add XP for unlocking achievement
        const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
        if (achievement) {
          const xpRewards: Record<string, number> = {
            common: 25,
            rare: 50,
            epic: 100,
            legendary: 250,
          };
          const xpReward = xpRewards[achievement.rarity] || 25;
          get().addXP(xpReward);
        }
      },

      updateStreak: () => {
        const now = new Date();
        const lastLogin = new Date(get().lastLogin);
        const daysDiff = Math.floor((now.getTime() - lastLogin.getTime()) / (1000 * 60 * 60 * 24));
        
        set((state) => {
          let newStreak = state.streak;
          
          if (daysDiff === 1) {
            // Consecutive day
            newStreak = state.streak + 1;
          } else if (daysDiff > 1) {
            // Streak broken
            newStreak = 1;
          }
          
          return {
            streak: newStreak,
            lastLogin: now.toISOString(),
          };
        });
        
        // Check for streak achievements
        const { streak } = get();
        if (streak >= 3) get().unlockAchievement('streak-3');
        if (streak >= 7) get().unlockAchievement('streak-7');
        if (streak >= 14) get().unlockAchievement('streak-14');
        if (streak >= 30) get().unlockAchievement('streak-30');
        if (streak >= 100) get().unlockAchievement('streak-100');
        
        // Add streak bonus XP
        if (daysDiff === 1) {
          get().addXP(10 * get().streak);
        }
      },

      completeDailyChallenge: () => {
        const today = new Date().toDateString();
        set({
          dailyChallengeCompleted: true,
          lastDailyChallengeDate: today,
        });
        
        // Add XP for daily challenge
        get().addXP(100);
        
        // Check for daily challenge achievements (would need to track count separately)
        get().unlockAchievement('daily-7');
      },

      updateLawReadingProgress: (lawId: string, progress: number) => {
        set((state) => ({
          lawReadingProgress: {
            ...state.lawReadingProgress,
            [lawId]: progress,
          },
        }));
      },

      toggleFavoriteLaw: (lawId: string) => {
        set((state) => ({
          favoriteLaws: state.favoriteLaws.includes(lawId)
            ? state.favoriteLaws.filter(id => id !== lawId)
            : [...state.favoriteLaws, lawId],
        }));
      },

      resetProgress: () => {
        set(initialState);
      },

      getLevelProgress: () => {
        const { level, totalXP } = get();
        const requiredXP = getRequiredXP(level);
        const progress = (totalXP / requiredXP) * 100;
        return { currentXP: totalXP, requiredXP, progress };
      },

      getLawMastery: (lawId: string): 'none' | 'bronze' | 'silver' | 'gold' => {
        const { quizScores, completedLaws } = get();
        
        if (!completedLaws.includes(lawId)) return 'none';
        
        const lawQuiz = quizScores.find(q => q.lawId === lawId);
        if (!lawQuiz) return 'bronze';
        
        const scorePercent = lawQuiz.score / lawQuiz.totalQuestions;
        if (scorePercent === 1) return 'gold';
        if (scorePercent >= 0.7) return 'silver';
        return 'bronze';
      },

      getTotalLawsCompleted: () => get().completedLaws.length,
      
      getTotalQuizzesTaken: () => get().quizScores.length,
      
      getAverageQuizScore: () => {
        const { quizScores } = get();
        if (quizScores.length === 0) return 0;
        const totalScore = quizScores.reduce((sum, q) => sum + (q.score / q.totalQuestions), 0);
        return Math.round((totalScore / quizScores.length) * 100);
      },
      
      getAchievementCount: () => get().achievements.length,
    }),
    {
      name: 'pimpology-game-storage',
    }
  )
);

// Daily challenge generator
export const generateDailyChallenge = () => {
  const challenges = [
    { type: 'read', description: 'Read and complete Law #{law}', xp: 100 },
    { type: 'quiz', description: 'Score 80% or higher on any quiz', xp: 150 },
    { type: 'streak', description: 'Maintain your login streak', xp: 50 },
    { type: 'reflect', description: 'Write a reflection on a law you\'ve read', xp: 75 },
    { type: 'master', description: 'Get a perfect score on any quiz', xp: 200 },
  ];
  
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const challengeIndex = seed % challenges.length;
  
  return challenges[challengeIndex];
};
