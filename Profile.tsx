import { motion } from 'framer-motion';
import { BookOpen, Trophy, Target, Zap, Flame, Crown, ChevronRight, Star, TrendingUp } from 'lucide-react';
import type { Page } from '../App';
import { useGameStore, getLevelTitle, generateDailyChallenge } from '../store/gameStore';
import { laws } from '../data/laws';
import { useState } from 'react';

interface DashboardProps {
  onNavigate: (page: Page, lawId?: string) => void;
  onShowXp: (amount: number, message: string) => void;
}

export function Dashboard({ onNavigate, onShowXp }: DashboardProps) {
  const { 
    level, 
    streak, 
    completedLaws, 
    getLevelProgress, 
    getTotalLawsCompleted,
    getAchievementCount,
    lastDailyChallengeDate,
    completeDailyChallenge
  } = useGameStore();
  
  const [dailyChallenge, setDailyChallenge] = useState(generateDailyChallenge());
  
  const levelProgress = getLevelProgress();
  const title = getLevelTitle(level);
  const lawsCompleted = getTotalLawsCompleted();
  const achievementCount = getAchievementCount();
  
  // Check if daily challenge is available
  const today = new Date().toDateString();
  const isDailyAvailable = lastDailyChallengeDate !== today;
  
  // Get recommended law (first incomplete)
  const recommendedLaw = laws.find(law => !completedLaws.includes(law.id));

  const handleDailyChallenge = () => {
    if (isDailyAvailable) {
      completeDailyChallenge();
      onShowXp(100, 'Daily Challenge Completed!');
      setDailyChallenge(generateDailyChallenge());
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <motion.div 
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#252542] p-8 md:p-12"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B5CF6]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <Crown className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold">Welcome back, {title}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              48 Laws Academy
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 max-w-xl"
            >
              Master the game. Rule your world. Learn the 48 Laws of Power through interactive lessons, quizzes, and challenges.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-[#1E1E2D] rounded-xl p-6 border border-[#D4AF37]/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <span className="text-sm text-gray-400">Level</span>
          </div>
          <p className="text-2xl font-bold text-white">{level}</p>
          <div className="mt-2 h-2 bg-[#0D0D15] rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${levelProgress.progress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547]"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">{levelProgress.currentXP}/{levelProgress.requiredXP} XP</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-[#1E1E2D] rounded-xl p-6 border border-orange-500/20"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-sm text-gray-400">Streak</span>
          </div>
          <p className="text-2xl font-bold text-white">{streak} Days</p>
          <p className="text-xs text-orange-400 mt-2">Keep it burning!</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          onClick={() => onNavigate('laws')}
          className="bg-[#1E1E2D] rounded-xl p-6 border border-[#8B5CF6]/20 cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#8B5CF6]" />
            </div>
            <span className="text-sm text-gray-400">Laws</span>
          </div>
          <p className="text-2xl font-bold text-white">{lawsCompleted}/48</p>
          <p className="text-xs text-[#8B5CF6] mt-2">{Math.round((lawsCompleted / 48) * 100)}% Complete</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          onClick={() => onNavigate('achievements')}
          className="bg-[#1E1E2D] rounded-xl p-6 border border-green-500/20 cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-sm text-gray-400">Achievements</span>
          </div>
          <p className="text-2xl font-bold text-white">{achievementCount}</p>
          <p className="text-xs text-green-400 mt-2">Keep unlocking!</p>
        </motion.div>
      </motion.section>

      {/* Daily Challenge */}
      {isDailyAvailable && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#8B5CF6]/20 rounded-xl p-6 border border-[#D4AF37]/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#0D0D15]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Daily Challenge</h3>
                  <p className="text-sm text-gray-400">Complete for bonus XP</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#D4AF37]">+100 XP</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{dailyChallenge.description}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDailyChallenge}
              className="w-full md:w-auto px-6 py-3 bg-[#D4AF37] hover:bg-[#E8C547] text-[#0D0D15] font-semibold rounded-lg transition-colors"
            >
              Accept Challenge
            </motion.button>
          </div>
        </motion.section>
      )}

      {/* Continue Learning */}
      {recommendedLaw && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
            Continue Learning
          </h2>
          <motion.div
            whileHover={{ scale: 1.01 }}
            onClick={() => onNavigate('law-detail', recommendedLaw.id)}
            className="bg-[#1E1E2D] rounded-xl p-6 border border-[#D4AF37]/20 cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold rounded">
                    Law {String(recommendedLaw.number).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-gray-500 capitalize">{recommendedLaw.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {recommendedLaw.title}
                </h3>
                <p className="text-gray-400 mt-2 line-clamp-2">{recommendedLaw.subtitle}</p>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        </motion.section>
      )}

      {/* Quick Access Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-xl font-bold text-white mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('laws')}
            className="bg-[#1E1E2D] hover:bg-[#252542] rounded-xl p-6 border border-gray-800 hover:border-[#D4AF37]/30 transition-all text-left"
          >
            <BookOpen className="w-8 h-8 text-[#8B5CF6] mb-3" />
            <h3 className="font-semibold text-white">All Laws</h3>
            <p className="text-sm text-gray-500">Browse the collection</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('achievements')}
            className="bg-[#1E1E2D] hover:bg-[#252542] rounded-xl p-6 border border-gray-800 hover:border-[#D4AF37]/30 transition-all text-left"
          >
            <Trophy className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold text-white">Achievements</h3>
            <p className="text-sm text-gray-500">Track your progress</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('leaderboard')}
            className="bg-[#1E1E2D] hover:bg-[#252542] rounded-xl p-6 border border-gray-800 hover:border-[#D4AF37]/30 transition-all text-left"
          >
            <Target className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="font-semibold text-white">Leaderboard</h3>
            <p className="text-sm text-gray-500">See top scholars</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('profile')}
            className="bg-[#1E1E2D] hover:bg-[#252542] rounded-xl p-6 border border-gray-800 hover:border-[#D4AF37]/30 transition-all text-left"
          >
            <Star className="w-8 h-8 text-[#D4AF37] mb-3" />
            <h3 className="font-semibold text-white">Profile</h3>
            <p className="text-sm text-gray-500">View your stats</p>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
