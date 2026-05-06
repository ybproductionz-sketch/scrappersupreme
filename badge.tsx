import { motion } from 'framer-motion';
import { BookOpen, Trophy, User, Home, CreditCard } from 'lucide-react';
import type { Page } from '../App';

interface MobileNavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function MobileNav({ currentPage, onNavigate }: MobileNavProps) {
  const navItems: { id: Page; label: string; icon: React.ElementType }[] = [
    { id: 'dashboard', label: 'Command', icon: Home },
    { id: 'laws', label: 'Laws', icon: BookOpen },
    { id: 'achievements', label: 'Awards', icon: Trophy },
    { id: 'membership', label: 'Status', icon: CreditCard },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-void-900/95 backdrop-blur-xl border-t border-gold-500/10 lg:hidden"
    >
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                isActive
                  ? 'text-gold-500'
                  : 'text-gray-500'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {isActive && (
                  <motion.div
                    layoutId="activeMobileNav"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-500 rounded-full"
                  />
                )}
              </div>
              <span className="text-[10px] font-medium tracking-wider uppercase">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
