import { motion } from 'framer-motion';
import { Lock, Crown, ArrowRight } from 'lucide-react';
import type { Page } from '../App';

interface TierLockProps {
  onNavigate: (page: Page) => void;
}

export function TierLock({ onNavigate }: TierLockProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        {/* Seal */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full border-2 border-gold-500/50 flex items-center justify-center relative">
            <div className="absolute inset-2 rounded-full border border-gold-500/30" />
            <div className="absolute inset-4 rounded-full border border-dashed border-gold-500/20" />
            <Lock className="w-8 h-8 text-gold-500" />
          </div>
        </div>

        <h1 className="font-display text-3xl text-white mb-4">Access Restricted</h1>
        <p className="text-gray-400 mb-8">
          The Laws are reserved for members of the Academy. 
          Request membership to begin your journey to mastery.
        </p>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('membership')}
            className="w-full py-4 bg-gold-500 text-void-900 font-semibold flex items-center justify-center gap-2 hover:bg-gold-400 transition-colors"
          >
            <Crown className="w-5 h-5" />
            <span>View Membership Options</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-sm text-gray-500">
            Questions? Contact <a href="mailto:access@48laws.academy" className="text-gold-500 hover:underline">access@48laws.academy</a>
          </p>
        </div>

        {/* Benefits Preview */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">What Members Receive</p>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              All 48 Laws
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              Interactive Quizzes
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              Achievement System
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              Private Community
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              Coaching Access
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
              Certification Path
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
