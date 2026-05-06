import { motion } from 'framer-motion';
import { Crown, Medal, Trophy, Target, TrendingUp, User } from 'lucide-react';
import type { Page } from '../App';
import { useGameStore, getLevelTitle } from '../store/gameStore';

interface LeaderboardProps {
  onNavigate: (page: Page, lawId?: string) => void;
}

// Simulated leaderboard data
const generateLeaderboardData = () => {
  const names = [
    'Alexander', 'Marcus', 'Julius', 'Augustus', 'Tiberius',
    'Caligula', 'Claudius', 'Nero', 'Vespasian', 'Titus',
    'Domitian', 'Trajan', 'Hadrian', 'Antoninus', 'MarcusAurelius',
    'Commodus', 'Septimius', 'Caracalla', 'Elagabalus', 'Diocletian'
  ];

  return names.map((name, index) => ({
    id: `user-${index}`,
    name: name,
    level: Math.floor(Math.random() * 30) + 10,
    xp: Math.floor(Math.random() * 5000) + 1000,
    lawsCompleted: Math.floor(Math.random() * 40) + 5,
    streak: Math.floor(Math.random() * 50) + 1,
    achievements: Math.floor(Math.random() * 20) + 5,
  })).sort((a, b) => b.xp - a.xp);
};

export function Leaderboard({ }: LeaderboardProps) {
  const { level, totalXP, completedLaws, streak, getAchievementCount } = useGameStore();
  const leaderboardData = generateLeaderboardData();
  
  // Insert current user at appropriate position
  const userEntry = {
    id: 'current-user',
    name: 'You',
    level,
    xp: totalXP + (level * 1000), // Approximate total XP
    lawsCompleted: completedLaws.length,
    streak,
    achievements: getAchievementCount(),
    isCurrentUser: true,
  };
  
  const allData = [...leaderboardData, userEntry].sort((a, b) => b.xp - a.xp);
  const userRank = allData.findIndex(u => u.id === 'current-user') + 1;

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Medal className="w-6 h-6 text-orange-400" />;
      default:
        return <span className="w-6 text-center text-gray-500 font-semibold">{rank}</span>;
    }
  };



  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-gray-400">See how you rank among other scholars</p>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex justify-center items-end gap-4 mb-12"
      >
        {/* 2nd Place */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mb-3 border-4 border-[#1E1E2D]">
            <span className="text-2xl font-bold text-[#0D0D15]">2</span>
          </div>
          <p className="text-white font-semibold text-center">{allData[1]?.name}</p>
          <p className="text-gray-400 text-sm">Level {allData[1]?.level}</p>
          <div className="w-24 h-24 bg-gradient-to-t from-gray-400/30 to-gray-400/10 rounded-t-lg mt-3" />
        </motion.div>

        {/* 1st Place */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <Crown className="w-8 h-8 text-yellow-400 mb-2" />
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mb-3 border-4 border-[#1E1E2D]">
            <span className="text-3xl font-bold text-[#0D0D15]">1</span>
          </div>
          <p className="text-white font-bold text-center text-lg">{allData[0]?.name}</p>
          <p className="text-[#D4AF37] text-sm">Level {allData[0]?.level}</p>
          <div className="w-28 h-32 bg-gradient-to-t from-yellow-400/30 to-yellow-400/10 rounded-t-lg mt-3" />
        </motion.div>

        {/* 3rd Place */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 border-4 border-[#1E1E2D]">
            <span className="text-2xl font-bold text-[#0D0D15]">3</span>
          </div>
          <p className="text-white font-semibold text-center">{allData[2]?.name}</p>
          <p className="text-gray-400 text-sm">Level {allData[2]?.level}</p>
          <div className="w-24 h-16 bg-gradient-to-t from-orange-400/30 to-orange-400/10 rounded-t-lg mt-3" />
        </motion.div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-white mb-4">Full Rankings</h2>
        <div className="space-y-2">
          {allData.slice(3, 15).map((user, index) => {
            const rank = index + 4;
            const isCurrentUser = user.id === 'current-user';
            
            return (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className={`flex items-center gap-4 p-4 rounded-xl border ${
                  isCurrentUser
                    ? 'bg-[#D4AF37]/20 border-[#D4AF37]/50'
                    : 'bg-[#1E1E2D] border-gray-800'
                }`}
              >
                {/* Rank */}
                <div className="w-8 flex justify-center">
                  {getRankIcon(rank)}
                </div>

                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isCurrentUser
                    ? 'bg-[#D4AF37]'
                    : 'bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]'
                }`}>
                  <User className="w-5 h-5 text-white" />
                </div>

                {/* Name & Level */}
                <div className="flex-1">
                  <p className={`font-semibold ${isCurrentUser ? 'text-[#D4AF37]' : 'text-white'}`}>
                    {user.name}
                    {isCurrentUser && ' (You)'}
                  </p>
                  <p className="text-sm text-gray-500">Level {user.level} • {getLevelTitle(user.level)}</p>
                </div>

                {/* Stats */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{user.achievements}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400">{user.lawsCompleted}</span>
                  </div>
                </div>

                {/* XP */}
                <div className="text-right">
                  <p className="text-white font-semibold">{user.xp.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">XP</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Your Position */}
      {userRank > 15 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-white mb-4">Your Position</h2>
          <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/50 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-8 flex justify-center">
                <span className="text-[#D4AF37] font-bold">{userRank}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                <User className="w-5 h-5 text-[#0D0D15]" />
              </div>
              <div className="flex-1">
                <p className="text-[#D4AF37] font-semibold">You</p>
                <p className="text-sm text-gray-400">Level {level} • {getLevelTitle(level)}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{userEntry.xp.toLocaleString()}</p>
                <p className="text-xs text-gray-500">XP</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tips to Climb */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12 bg-gradient-to-r from-[#8B5CF6]/10 to-[#D4AF37]/10 rounded-xl p-6 border border-[#8B5CF6]/20"
      >
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
          Tips to Climb the Ranks
        </h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            Complete laws daily to maintain your streak
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            Take quizzes to earn bonus XP
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            Unlock achievements for big XP rewards
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
            Aim for perfect quiz scores
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
