import { motion } from 'framer-motion';
import { BookOpen, Trophy, Target, Home, Crown, CreditCard, Award } from 'lucide-react';
import type { Page } from '../App';
import { useGameStore, getLevelTitle } from '../store/gameStore';
import { useTierStore, TIER_INFO } from '../store/tierStore';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { level } = useGameStore();
  const { tier } = useTierStore();
  const title = getLevelTitle(level);
  const tierInfo = TIER_INFO[tier];

  const navItems: { id: Page; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Command', icon: Home },
    { id: 'laws', label: 'The Laws', icon: BookOpen },
    { id: 'achievements', label: 'Accolades', icon: Trophy },
    { id: 'leaderboard', label: 'Hierarchy', icon: Target },
    { id: 'membership', label: 'Status', icon: CreditCard },
    { id: 'coaching', label: 'Mastery', icon: Award },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="bg-void-900/80 backdrop-blur-xl border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-gold-500/50 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <div className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center">
                    <Crown className="w-4 h-4 text-gold-500" />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-sm tracking-[0.2em] text-gold-500">48 LAWS</h1>
                <p className="text-[10px] text-gray-500 tracking-wider uppercase">Academy</p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                      isActive
                        ? 'text-gold-500'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gold-500/10 rounded-lg border border-gold-500/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10 text-xs font-medium tracking-wider uppercase">{item.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* User Stats */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs text-gray-400 tracking-wider uppercase">{tierInfo.name}</span>
                <span className="text-[10px] text-gold-500/70">{title}</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center border border-gold-400">
                <span className="font-display text-sm font-bold text-void-900">{level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
