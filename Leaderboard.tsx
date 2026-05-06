import { motion } from 'framer-motion';
import { Trophy, Lock, CheckCircle } from 'lucide-react';
import type { Page } from '../App';
import { useGameStore, ACHIEVEMENTS } from '../store/gameStore';
import { useState, useMemo } from 'react';

interface AchievementsProps {
  onNavigate: (page: Page, lawId?: string) => void;
  onShowXp: (amount: number, message: string) => void;
}

export function Achievements({ }: AchievementsProps) {
  const { achievements } = useGameStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const unlockedIds = new Set(achievements.map(a => a.id));

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'learning', name: 'Learning' },
    { id: 'quiz', name: 'Quiz' },
    { id: 'streak', name: 'Streak' },
    { id: 'level', name: 'Level' },
    { id: 'special', name: 'Special' },
  ];

  const filteredAchievements = useMemo(() => {
    if (selectedCategory === 'all') return ACHIEVEMENTS;
    return ACHIEVEMENTS.filter(a => a.category === selectedCategory);
  }, [selectedCategory]);

  const unlockedCount = achievements.length;
  const totalCount = ACHIEVEMENTS.length;
  const progressPercent = Math.round((unlockedCount / totalCount) * 100);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return 'from-yellow-500 to-amber-600';
      case 'epic':
        return 'from-purple-500 to-purple-600';
      case 'rare':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return 'bg-yellow-500/20 border-yellow-500/30';
      case 'epic':
        return 'bg-purple-500/20 border-purple-500/30';
      case 'rare':
        return 'bg-blue-500/20 border-blue-500/30';
      default:
        return 'bg-gray-800 border-gray-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Achievements</h1>
        <p className="text-gray-400">Unlock achievements to earn XP and prove your mastery</p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[#1E1E2D] rounded-xl p-6 mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C547] flex items-center justify-center">
              <Trophy className="w-8 h-8 text-[#0D0D15]" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">{unlockedCount}/{totalCount}</p>
              <p className="text-gray-400">Achievements Unlocked</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-[#D4AF37]">{progressPercent}%</p>
            <p className="text-gray-400">Complete</p>
          </div>
        </div>
        <div className="h-3 bg-[#0D0D15] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547]"
          />
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
              selectedCategory === cat.id
                ? 'bg-[#D4AF37] text-[#0D0D15]'
                : 'bg-[#1E1E2D] text-gray-400 hover:text-white'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredAchievements.map((achievement, index) => {
          const isUnlocked = unlockedIds.has(achievement.id);
          
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`relative rounded-xl p-5 border transition-all ${
                isUnlocked
                  ? `${getRarityBg(achievement.rarity)}`
                  : 'bg-[#1E1E2D] border-gray-800 opacity-60'
              }`}
            >
              {/* Unlocked Badge */}
              {isUnlocked && (
                <div className="absolute top-3 right-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isUnlocked
                    ? `bg-gradient-to-br ${getRarityColor(achievement.rarity)}`
                    : 'bg-gray-800'
                }`}>
                  {isUnlocked ? (
                    <Trophy className="w-6 h-6 text-white" />
                  ) : (
                    <Lock className="w-5 h-5 text-gray-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold mb-1 ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                    {achievement.name}
                  </h3>
                  <p className={`text-sm mb-3 ${isUnlocked ? 'text-gray-400' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                      achievement.rarity === 'legendary'
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : achievement.rarity === 'epic'
                        ? 'bg-purple-500/20 text-purple-500'
                        : achievement.rarity === 'rare'
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {achievement.rarity}
                    </span>
                    
                    {isUnlocked && (
                      <span className="text-xs text-green-500">
                        +{
                          achievement.rarity === 'legendary' ? 250 :
                          achievement.rarity === 'epic' ? 100 :
                          achievement.rarity === 'rare' ? 50 : 25
                        } XP
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {filteredAchievements.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Trophy className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No achievements found</h3>
          <p className="text-gray-600">Try selecting a different category</p>
        </motion.div>
      )}
    </div>
  );
}
