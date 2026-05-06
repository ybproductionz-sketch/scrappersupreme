import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, CheckCircle, Lock, ChevronRight } from 'lucide-react';
import type { Page } from '../App';
import { laws, getAllCategories } from '../data/laws';
import type { LawCategory } from '../data/laws';
import { useGameStore } from '../store/gameStore';
import { useState, useMemo } from 'react';

interface LawsLibraryProps {
  onNavigate: (page: Page, lawId?: string) => void;
}

export function LawsLibrary({ onNavigate }: LawsLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LawCategory | 'all'>('all');
  const { completedLaws, getLawMastery } = useGameStore();

  const categories = getAllCategories();

  const filteredLaws = useMemo(() => {
    return laws.filter(law => {
      const matchesSearch = 
        law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        law.number.toString().includes(searchQuery);
      const matchesCategory = selectedCategory === 'all' || law.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getMasteryIcon = (mastery: 'none' | 'bronze' | 'silver' | 'gold') => {
    switch (mastery) {
      case 'gold':
        return <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center"><span className="text-xs">★</span></div>;
      case 'silver':
        return <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center"><span className="text-xs text-gray-700">★</span></div>;
      case 'bronze':
        return <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center"><span className="text-xs">★</span></div>;
      default:
        return <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center"><Lock className="w-3 h-3 text-gray-500" /></div>;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">The 48 Laws</h1>
        <p className="text-gray-400">Master each law to unlock your full potential</p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[#1E1E2D] rounded-xl p-6 mb-8"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Overall Progress</span>
          <span className="text-sm font-semibold text-[#D4AF37]">
            {completedLaws.length}/48 Laws
          </span>
        </div>
        <div className="h-3 bg-[#0D0D15] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(completedLaws.length / 48) * 100}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E8C547]"
          />
        </div>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4 mb-8"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search laws..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1E1E2D] border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50"
          />
        </div>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedCategory === 'all'
              ? 'bg-[#D4AF37] text-[#0D0D15]'
              : 'bg-[#1E1E2D] text-gray-400 hover:text-white'
          }`}
        >
          All Laws
        </button>
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

      {/* Laws Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredLaws.map((law) => {
            const isCompleted = completedLaws.includes(law.id);
            const mastery = getLawMastery(law.id);
            
            return (
              <motion.div
                key={law.id}
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.02 }}
                onClick={() => onNavigate('law-detail', law.id)}
                className={`group bg-[#1E1E2D] rounded-xl p-5 border cursor-pointer transition-all ${
                  isCompleted
                    ? 'border-[#D4AF37]/30 hover:border-[#D4AF37]/60'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isCompleted ? 'bg-[#D4AF37]/20' : 'bg-gray-800'
                    }`}>
                      <span className={`text-sm font-bold ${
                        isCompleted ? 'text-[#D4AF37]' : 'text-gray-500'
                      }`}>
                        {String(law.number).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {law.category}
                      </span>
                    </div>
                  </div>
                  {getMasteryIcon(mastery)}
                </div>

                <h3 className={`font-bold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors ${
                  isCompleted ? 'text-white' : 'text-gray-300'
                }`}>
                  {law.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{law.subtitle}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isCompleted ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-500">Completed</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-4 h-4 text-gray-600" />
                        <span className="text-xs text-gray-600">Not started</span>
                      </>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filteredLaws.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <BookOpen className="w-16 h-16 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No laws found</h3>
          <p className="text-gray-600">Try adjusting your search or filter</p>
        </motion.div>
      )}
    </div>
  );
}
