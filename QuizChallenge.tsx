import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Lightbulb, Quote, CheckCircle, Play, ChevronRight, ChevronLeft, Heart } from 'lucide-react';
import type { Page } from '../App';
import { getLawById } from '../data/laws';
import { useGameStore } from '../store/gameStore';
import { useEffect, useState } from 'react';

interface LawDetailProps {
  lawId: string;
  onNavigate: (page: Page, lawId?: string) => void;
  onShowXp: (amount: number, message: string) => void;
}

export function LawDetail({ lawId, onNavigate, onShowXp }: LawDetailProps) {
  const law = getLawById(lawId);
  const { 
    completeLaw, 
    completedLaws, 
    toggleFavoriteLaw, 
    favoriteLaws,
    updateLawReadingProgress 
  } = useGameStore();
  
  const [readingProgress, setReadingProgress] = useState(0);
  
  const isCompleted = completedLaws.includes(lawId);
  const isFavorite = favoriteLaws.includes(lawId);

  useEffect(() => {
    // Simulate reading progress
    const timer = setTimeout(() => {
      setReadingProgress(100);
      if (!isCompleted) {
        completeLaw(lawId);
        onShowXp(50, `Law ${law?.number} Completed!`);
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [lawId, isCompleted, completeLaw, onShowXp, law?.number]);

  useEffect(() => {
    updateLawReadingProgress(lawId, readingProgress);
  }, [readingProgress, lawId, updateLawReadingProgress]);

  if (!law) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl text-white">Law not found</h1>
        <button
          onClick={() => onNavigate('laws')}
          className="mt-4 text-[#D4AF37] hover:underline"
        >
          Back to Laws
        </button>
      </div>
    );
  }

  const prevLaw = law.number > 1 ? `law-${law.number - 1}` : null;
  const nextLaw = law.number < 48 ? `law-${law.number + 1}` : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-[#0D0D15] z-40">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          className="h-full bg-[#D4AF37]"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <button
          onClick={() => onNavigate('laws')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Laws</span>
        </button>
        
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleFavoriteLaw(lawId)}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite ? 'bg-red-500/20 text-red-500' : 'bg-gray-800 text-gray-400'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </motion.button>
          
          {isCompleted && (
            <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-500">Completed</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Law Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 rounded-full mb-4">
          <span className="text-[#D4AF37] font-bold">Law {String(law.number).padStart(2, '0')}</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-400 capitalize">{law.category}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{law.title}</h1>
        <p className="text-xl text-gray-400">{law.subtitle}</p>
      </motion.div>

      {/* The Life Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <h2 className="text-2xl font-bold text-white">The Life</h2>
        </div>
        <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-gray-800">
          <p className="text-gray-300 leading-relaxed text-lg">{law.theLife}</p>
        </div>
      </motion.section>

      {/* The Ism Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
            <Quote className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <h2 className="text-2xl font-bold text-white">The Ism</h2>
        </div>
        <div className="bg-gradient-to-br from-[#1E1E2D] to-[#252542] rounded-xl p-6 md:p-8 border border-[#D4AF37]/20">
          <Quote className="w-8 h-8 text-[#D4AF37]/30 mb-4" />
          <p className="text-white leading-relaxed text-lg font-medium">{law.theIsm}</p>
        </div>
      </motion.section>

      {/* Key Takeaways */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-white">Key Takeaways</h2>
        </div>
        <div className="grid gap-4">
          {law.takeaways.map((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-4 bg-[#1E1E2D] rounded-xl p-4 border border-gray-800"
            >
              <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-[#D4AF37] font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-300">{takeaway}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Real World Examples */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Real World Examples</h2>
        <div className="grid gap-6">
          {law.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-[#1E1E2D] rounded-xl p-6 border border-gray-800"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold rounded capitalize">
                  {example.context}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{example.title}</h3>
              <p className="text-gray-400">{example.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Reflection */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#D4AF37]/10 rounded-xl p-6 md:p-8 border border-[#8B5CF6]/20">
          <h2 className="text-xl font-bold text-white mb-4">Reflection</h2>
          <p className="text-gray-300 mb-6">{law.reflection}</p>
          <textarea
            placeholder="Write your thoughts here..."
            className="w-full h-32 bg-[#0D0D15] border border-gray-800 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 resize-none"
          />
        </div>
      </motion.section>

      {/* Quiz CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mb-12"
      >
        <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#8B5CF6]/20 rounded-xl p-6 md:p-8 border border-[#D4AF37]/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Test Your Knowledge</h2>
              <p className="text-gray-400">Take the quiz to earn XP and prove your mastery</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('quiz', lawId)}
              className="flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E8C547] text-[#0D0D15] font-semibold rounded-lg transition-colors"
            >
              <Play className="w-5 h-5" />
              Start Quiz
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-between pt-8 border-t border-gray-800"
      >
        {prevLaw ? (
          <button
            onClick={() => onNavigate('law-detail', prevLaw)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous Law</span>
          </button>
        ) : (
          <div />
        )}
        
        {nextLaw && (
          <button
            onClick={() => onNavigate('law-detail', nextLaw)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Next Law</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </motion.div>
    </div>
  );
}
