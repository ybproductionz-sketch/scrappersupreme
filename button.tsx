import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Plus } from 'lucide-react';

interface XpNotificationProps {
  amount: number;
  message: string;
}

export function XpNotification({ amount, message }: XpNotificationProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.8 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        className="fixed bottom-24 md:bottom-8 right-4 z-50"
      >
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#E8C547] rounded-xl p-4 shadow-lg shadow-[#D4AF37]/20 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Plus className="w-4 h-4 text-white" />
              <span className="text-xl font-bold text-white">{amount} XP</span>
            </div>
            <p className="text-sm text-white/80">{message}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
