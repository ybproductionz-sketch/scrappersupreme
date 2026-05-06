import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock, TrendingUp, Star, DollarSign, Users, Lock } from 'lucide-react';
import type { Page } from '../App';
import { useCoachStore, COACH_TIER_INFO } from '../store/coachStore';
import { useTierStore, TIER_BENEFITS } from '../store/tierStore';
import { useState } from 'react';

interface CoachingProps {
  onNavigate: (page: Page) => void;
}

export function Coaching({ onNavigate }: CoachingProps) {
  const { 
    status, 
    modules, 
    getProgress, 
    apply, 
    canApply,
    totalStudentsCoached,
    revenueEarned,
    rating,
    reviewCount 
  } = useCoachStore();
  const { tier } = useTierStore();
  const [showApplyModal, setShowApplyModal] = useState(false);

  const coachInfo = COACH_TIER_INFO[status];
  const progress = getProgress();
  const canCertify = TIER_BENEFITS[tier].certificationPath;

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

  const handleApply = () => {
    const eligibility = canApply();
    if (eligibility.eligible) {
      apply();
      setShowApplyModal(false);
    }
  };

  if (!canCertify && status === 'none') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full border-2 border-gold-500/50 flex items-center justify-center">
              <Lock className="w-8 h-8 text-gold-500" />
            </div>
          </div>

          <h1 className="font-display text-3xl text-white mb-4">Certification Locked</h1>
          <p className="text-gray-400 mb-8">
            Coach certification is available to Boss and Lifetime King members only. 
            Upgrade your membership to unlock this path.
          </p>

          <button
            onClick={() => onNavigate('membership')}
            className="w-full py-4 bg-gold-500 text-void-900 font-semibold hover:bg-gold-400 transition-colors"
          >
            View Membership Options
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-4">Become an Authority</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Coach Certification</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Not everyone who learns should teach. Our certification ensures only those 
          who have mastered the Laws—and demonstrated the character to wield them—are authorized to guide others.
        </p>
      </motion.div>

      {/* Status Card */}
      {status !== 'none' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-700/10 border border-gold-500/30 rounded-xl p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{coachInfo.badge}</span>
                  <span className="font-display text-xl text-white">{coachInfo.title}</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Progress</p>
                <p className="font-display text-2xl text-gold-500">{progress}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Revenue Share</p>
                <p className="font-display text-2xl text-white">{coachInfo.revenueShare}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Max Rate</p>
                <p className="font-display text-2xl text-white">${coachInfo.maxRate}/hr</p>
              </div>
            </div>

            {status === 'certified' && (
              <div className="grid md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gold-500/20">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Students Coached</p>
                  <p className="font-display text-2xl text-white">{totalStudentsCoached}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Revenue Earned</p>
                  <p className="font-display text-2xl text-gold-500">${revenueEarned.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Rating</p>
                  <div className="flex items-center gap-2">
                    <p className="font-display text-2xl text-white">{rating.toFixed(1)}</p>
                    <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
                    <span className="text-sm text-gray-500">({reviewCount})</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Certification Path */}
      {status !== 'none' && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="font-display text-2xl text-white mb-8">Certification Path</h2>
          <div className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                variants={itemVariants}
                className={`flex items-start gap-4 p-6 rounded-xl border ${
                  module.completed
                    ? 'bg-gold-500/5 border-gold-500/30'
                    : 'bg-void-700 border-gray-800'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  module.completed ? 'bg-gold-500' : 'bg-gray-800'
                }`}>
                  {module.completed ? (
                    <CheckCircle className="w-6 h-6 text-void-900" />
                  ) : (
                    <span className="font-display text-gold-500">{String(index + 1).padStart(2, '0')}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium mb-1 ${module.completed ? 'text-gold-500' : 'text-white'}`}>
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{module.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {module.duration}
                    </span>
                    {module.completed && module.completedAt && (
                      <span className="text-gold-500/70">
                        Completed {new Date(module.completedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Program Details */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8"
      >
        <motion.div variants={itemVariants} className="bg-void-700 border border-gray-800 rounded-xl p-6">
          <h3 className="font-display text-xl text-white mb-6">Program Requirements</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-gold-500">1</span>
              </div>
              <div>
                <p className="text-white">Complete Mastery</p>
                <p className="text-sm text-gray-500">Score 95%+ on all 48 law quizzes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-gold-500">2</span>
              </div>
              <div>
                <p className="text-white">Character Assessment</p>
                <p className="text-sm text-gray-500">Background check and interview</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-gold-500">3</span>
              </div>
              <div>
                <p className="text-white">90-Day Apprenticeship</p>
                <p className="text-sm text-gray-500">Shadow certified coaches</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs text-gold-500">4</span>
              </div>
              <div>
                <p className="text-white">Official Authorization</p>
                <p className="text-sm text-gray-500">Receive certification seal</p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-void-700 border border-gray-800 rounded-xl p-6">
          <h3 className="font-display text-xl text-white mb-6">Coach Benefits</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-gold-500" />
              <div>
                <p className="text-white">Revenue Share</p>
                <p className="text-sm text-gray-500">Keep 70-80% of coaching fees</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gold-500" />
              <div>
                <p className="text-white">Student Referrals</p>
                <p className="text-sm text-gray-500">Academy sends you clients</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gold-500" />
              <div>
                <p className="text-white">Official Seal</p>
                <p className="text-sm text-gray-500">Certified under Academy brand</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-gold-500" />
              <div>
                <p className="text-white">Career Growth</p>
                <p className="text-sm text-gray-500">Path to Senior and Master Coach</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* CTA */}
      {status === 'none' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-700/10 border border-gold-500/30 rounded-xl p-8">
            <p className="text-gray-400 mb-6">
              Only 24 new coaches are authorized per year. 
              Applications are reviewed quarterly.
            </p>
            <button
              onClick={() => setShowApplyModal(true)}
              className="px-8 py-4 bg-gold-500 text-void-900 font-semibold hover:bg-gold-400 transition-colors"
            >
              Apply for Certification
            </button>
          </div>
        </motion.div>
      )}

      {/* Apply Modal */}
      {showApplyModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void-900/95 backdrop-blur-xl"
          onClick={() => setShowApplyModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-void-700 border border-gold-500/30 rounded-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-xl text-white mb-4">Coach Application</h3>
            <div className="p-4 bg-gold-500/5 border border-gold-500/20 rounded-lg mb-6">
              <p className="text-sm text-gray-400">
                <span className="text-gold-500">Note:</span> Certification fee is $1,497. 
                Annual renewal is $297. You must maintain Boss or Lifetime King membership.
              </p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleApply(); }}>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-500 mb-2">Why do you want to coach?</label>
                  <textarea required rows={3} className="w-full px-4 py-3 bg-void-800 border border-gray-700 rounded-lg text-white resize-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-2">Area of expertise</label>
                  <input type="text" required className="w-full px-4 py-3 bg-void-800 border border-gray-700 rounded-lg text-white" placeholder="Business, relationships, leadership..." />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 py-3 border border-gray-700 text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gold-500 text-void-900 font-semibold hover:bg-gold-400"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
