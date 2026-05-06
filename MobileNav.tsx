import { motion } from 'framer-motion';
import { Settings, BookOpen, Trophy, Target, Zap, Flame, TrendingUp, Award } from 'lucide-react';
import type { Page } from '../App';
import { useGameStore, getLevelTitle, ACHIEVEMENTS } from '../store/gameStore';
import { laws } from '../data/laws';

interface ProfileProps {
  onNavigate: (page: Page, lawId?: string) => void;
}

export function Profile({ onNavigate }: ProfileProps) {
  const { 
    level, 
    streak,
    completedLaws, 
    achievements,
    getLevelProgress,
    getTotalQuizzesTaken,
    getAverageQuizScore,
    getAchievementCount,
    resetProgress
  } = useGameStore();

  const levelProgress = getLevelProgress();
  const title = getLevelTitle(level);
  const quizzesTaken = getTotalQuizzesTaken();
  const avgScore = getAverageQuizScore();
  const achievementCount = getAchievementCount();
  
  // Get recent achievements
  const recentAchievements = achievements
    .slice(-5)
    .map(a => ACHIEVEMENTS.find(ach => ach.id === a.id))
    .filter(Boolean);

  // Get recently completed laws
  const recentLaws = laws
    .filter(law => completedLaws.includes(law.id))
    .slice(-5);

  const stats = [
    { label: 'Laws Completed', value: completedLaws.length, total: 48, icon: BookOpen, color: 'text-[#8B5CF6]' },
    { label: 'Quizzes Taken', value: quizzesTaken, icon: Target, color: 'text-blue-400' },
    { label: 'Avg Quiz Score', value: `${avgScore}%`, icon: TrendingUp, color: 'text-green-400' },
    { label: 'Achievements', value: achievementCount, icon: Trophy, color: 'text-[#D4AF37]' },
  ];

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-[#1A1A2E] to-[#252542] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="relative"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-[#0D0D15]">{level}</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#0D0D15] rounded-full flex items-center justify-center border-2 border-[#D4AF37]">
                <Zap className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </motion.div>
            
            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
              <p className="text-gray-400 mb-4">Level {level} Scholar</p>
              
              {/* Level Progress */}
              <div className="max-w-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Progress to Level {level + 1}</span>
                  <span className="text-sm text-[#D4AF37]">{levelProgress.currentXP}/{levelProgress.requiredXP} XP</span>
                </div>
                <div className="h-3 bg-[#0D0D15] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${levelProgress.progress}%` }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547]"
                  />
                </div>
              </div>
            </div>
            
            {/* Streak */}
            <div className="flex items-center gap-3 bg-orange-500/10 px-6 py-4 rounded-xl border border-orange-500/30">
              <Flame className="w-8 h-8 text-orange-500" />
              <div>
                <p className="text-2xl font-bold text-white">{streak}</p>
                <p className="text-sm text-orange-400">Day Streak</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="text-xl font-bold text-white mb-4">Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-[#1E1E2D] rounded-xl p-5 border border-gray-800"
              >
                <Icon className={`w-6 h-6 ${stat.color} mb-3`} />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Recent Achievements */}
      {recentAchievements.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Recent Achievements</h2>
            <button
              onClick={() => onNavigate('achievements')}
              className="text-sm text-[#D4AF37] hover:underline"
            >
              View All
            </button>
          </div>
          <div className="grid gap-3">
            {recentAchievements.map((achievement, index) => (
              <motion.div
                key={achievement!.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-4 bg-[#1E1E2D] rounded-xl p-4 border border-gray-800"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  achievement!.rarity === 'legendary' ? 'bg-yellow-500/20' :
                  achievement!.rarity === 'epic' ? 'bg-purple-500/20' :
                  achievement!.rarity === 'rare' ? 'bg-blue-500/20' :
                  'bg-gray-700'
                }`}>
                  <Trophy className={`w-6 h-6 ${
                    achievement!.rarity === 'legendary' ? 'text-yellow-500' :
                    achievement!.rarity === 'epic' ? 'text-purple-500' :
                    achievement!.rarity === 'rare' ? 'text-blue-500' :
                    'text-gray-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{achievement!.name}</h3>
                  <p className="text-sm text-gray-500">{achievement!.description}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                  achievement!.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-500' :
                  achievement!.rarity === 'epic' ? 'bg-purple-500/20 text-purple-500' :
                  achievement!.rarity === 'rare' ? 'bg-blue-500/20 text-blue-500' :
                  'bg-gray-700 text-gray-400'
                }`}>
                  {achievement!.rarity}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Recently Completed Laws */}
      {recentLaws.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-4">Recently Completed</h2>
          <div className="grid gap-3">
            {recentLaws.map((law, index) => (
              <motion.button
                key={law.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => onNavigate('law-detail', law.id)}
                className="flex items-center gap-4 bg-[#1E1E2D] rounded-xl p-4 border border-gray-800 hover:border-[#D4AF37]/30 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold">{law.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{law.title}</h3>
                  <p className="text-sm text-gray-500">{law.subtitle}</p>
                </div>
                <Award className="w-5 h-5 text-green-500" />
              </motion.button>
            ))}
          </div>
        </motion.section>
      )}

      {/* Settings */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-bold text-white mb-4">Settings</h2>
        <div className="bg-[#1E1E2D] rounded-xl border border-gray-800 overflow-hidden">
          <button
            onClick={handleReset}
            className="w-full flex items-center gap-4 p-4 hover:bg-red-500/10 transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <Settings className="w-5 h-5 text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Reset Progress</h3>
              <p className="text-sm text-gray-500">Clear all data and start over</p>
            </div>
          </button>
        </div>
      </motion.section>
    </div>
  );
}
