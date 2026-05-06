import { motion } from 'framer-motion';
import { Crown, Shield, Gem, User, Check, Bitcoin, Hexagon, DollarSign, CreditCard, Copy } from 'lucide-react';
import type { Page } from '../App';
import { useTierStore, TIER_INFO, TIER_BENEFITS } from '../store/tierStore';
import type { MembershipTier } from '../store/tierStore';
import { useState } from 'react';

interface MembershipProps {
  onNavigate: (page: Page) => void;
}

const PAYMENT_METHODS = [
  { id: 'bitcoin', name: 'Bitcoin', icon: Bitcoin, color: 'text-orange-500', discount: '10%', address: 'bc1q48lawsacademyxxxxxxxxxxxxxxxxxxxxx' },
  { id: 'ethereum', name: 'Ethereum', icon: Hexagon, color: 'text-purple-500', discount: '10%', address: '0x48LawsAcademyxxxxxxxxxxxxxxxxxxxxxxxx' },
  { id: 'cashapp', name: 'Cash App', icon: DollarSign, color: 'text-green-500', discount: null, handle: '$48LawsAcademy' },
  { id: 'venmo', name: 'Venmo', icon: CreditCard, color: 'text-blue-500', discount: null, handle: '@48LawsAcademy' },
  { id: 'stripe', name: 'Credit Card', icon: CreditCard, color: 'text-gold-500', discount: null },
];

const TIERS: { id: MembershipTier; name: string; price: string; period: string; icon: React.ElementType; featured?: boolean }[] = [
  { id: 'apprentice', name: 'Apprentice', price: '$29', period: '/month', icon: User },
  { id: 'lieutenant', name: 'Lieutenant', price: '$79', period: '/month', icon: Shield },
  { id: 'boss', name: 'Boss', price: '$199', period: '/month', icon: Crown, featured: true },
  { id: 'king', name: 'Lifetime King', price: '$2,997', period: ' one-time', icon: Gem },
];

export function Membership({ onNavigate }: MembershipProps) {
  const { tier, setTier, setPaymentMethod } = useTierStore();
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectTier = (tierId: MembershipTier) => {
    setSelectedTier(tierId);
    setShowPaymentModal(true);
  };

  const handlePayment = (methodId: string) => {
    setSelectedPayment(methodId);
    setPaymentMethod(methodId);
    
    if (selectedTier) {
      setTier(selectedTier);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <p className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-4">Choose Your Path</p>
        <h1 className="font-display text-4xl md:text-5xl text-white mb-4">Membership Status</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Each tier represents a level of commitment to mastery. 
          Advancement is earned, not purchased.
        </p>
      </motion.div>

      {/* Current Status */}
      {tier !== 'none' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-700/10 border border-gold-500/30 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center">
                  <Crown className="w-7 h-7 text-void-900" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Current Status</p>
                  <p className="font-display text-2xl text-white">{TIER_INFO[tier].name}</p>
                  <p className="text-sm text-gold-500">{TIER_INFO[tier].price}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Benefits Active</p>
                <p className="text-2xl font-display text-gold-500">
                  {Object.values(TIER_BENEFITS[tier]).filter(Boolean).length}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tier Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {TIERS.map((t) => {
          const Icon = t.icon;
          const isCurrent = tier === t.id;
          const benefits = TIER_BENEFITS[t.id];
          
          return (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className={`relative rounded-xl border transition-all duration-300 ${
                isCurrent
                  ? 'bg-gold-500/10 border-gold-500/50'
                  : t.featured
                  ? 'bg-void-700 border-gold-500/50 shadow-[0_0_40px_rgba(212,175,55,0.15)]'
                  : 'bg-void-700 border-gray-800 hover:border-gold-500/30'
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold-500 text-void-900 text-[10px] font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCurrent ? 'bg-gold-500' : 'bg-gold-500/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${isCurrent ? 'text-void-900' : 'text-gold-500'}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-white">{t.name}</h3>
                    <p className="text-xs text-gray-500">{t.period === '/month' ? 'Monthly' : 'One-time'}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="font-display text-3xl text-white">{t.price}</span>
                  <span className="text-gray-500 text-sm">{t.period}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${benefits.maxLaws >= 48 ? 'text-gold-500' : 'text-gray-600'}`} />
                    <span className={benefits.maxLaws >= 48 ? 'text-white' : 'text-gray-500'}>
                      {benefits.maxLaws === 48 ? 'All 48 Laws' : `Laws 1-${benefits.maxLaws}`}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${benefits.quizAccess ? 'text-gold-500' : 'text-gray-600'}`} />
                    <span className={benefits.quizAccess ? 'text-white' : 'text-gray-500'}>Quiz Access</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${benefits.coachingCalls ? 'text-gold-500' : 'text-gray-600'}`} />
                    <span className={benefits.coachingCalls ? 'text-white' : 'text-gray-500'}>Coaching Calls</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${benefits.oneOnOneMentorship ? 'text-gold-500' : 'text-gray-600'}`} />
                    <span className={benefits.oneOnOneMentorship ? 'text-white' : 'text-gray-500'}>1-on-1 Mentorship</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${benefits.certificationPath ? 'text-gold-500' : 'text-gray-600'}`} />
                    <span className={benefits.certificationPath ? 'text-white' : 'text-gray-500'}>Coach Certification</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleSelectTier(t.id)}
                  disabled={isCurrent}
                  className={`w-full py-3 text-sm font-medium transition-all duration-300 ${
                    isCurrent
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : t.featured
                      ? 'bg-gold-500 text-void-900 hover:bg-gold-400'
                      : 'border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-void-900'
                  }`}
                >
                  {isCurrent ? 'Current Plan' : 'Select'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center"
      >
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">Accepted Payment Methods</p>
        <div className="flex flex-wrap justify-center gap-4">
          {PAYMENT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <div key={method.id} className="flex items-center gap-2 px-4 py-2 bg-void-700 border border-gray-800 rounded-lg">
                <Icon className={`w-5 h-5 ${method.color}`} />
                <span className="text-sm text-gray-400">{method.name}</span>
                {method.discount && (
                  <span className="text-xs text-green-500">-{method.discount}</span>
                )}
              </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Crypto payments receive 10% discount. Contact{' '}
          <a href="mailto:access@48laws.academy" className="text-gold-500 hover:underline">
            access@48laws.academy
          </a>{' '}
          for wallet addresses.
        </p>
      </motion.div>

      {/* Payment Modal */}
      {showPaymentModal && selectedTier && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-void-900/95 backdrop-blur-xl"
          onClick={() => setShowPaymentModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-void-700 border border-gold-500/30 rounded-xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display text-xl text-white mb-6">Complete Your Upgrade</h3>
            
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Selected Plan</p>
              <div className="flex items-center justify-between p-4 bg-void-800 rounded-lg">
                <span className="text-white font-medium">{TIER_INFO[selectedTier].name}</span>
                <span className="text-gold-500 font-display">{TIER_INFO[selectedTier].price}</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">Select Payment Method</p>
            <div className="space-y-2 mb-6">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon;
                return (
                  <button
                    key={method.id}
                    onClick={() => handlePayment(method.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all ${
                      selectedPayment === method.id
                        ? 'border-gold-500 bg-gold-500/10'
                        : 'border-gray-800 hover:border-gold-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${method.color}`} />
                      <span className="text-white">{method.name}</span>
                    </div>
                    {method.discount && (
                      <span className="text-xs text-green-500">Save {method.discount}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedPayment && selectedPayment !== 'stripe' && (
              <div className="mb-6 p-4 bg-void-800 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">Send payment to:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs text-gold-500 bg-void-900 p-2 rounded break-all">
                    {PAYMENT_METHODS.find(m => m.id === selectedPayment)?.address || 
                     PAYMENT_METHODS.find(m => m.id === selectedPayment)?.handle}
                  </code>
                  <button
                    onClick={() => copyToClipboard(
                      PAYMENT_METHODS.find(m => m.id === selectedPayment)?.address || 
                      PAYMENT_METHODS.find(m => m.id === selectedPayment)?.handle || ''
                    )}
                    className="p-2 text-gray-400 hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied && <p className="text-xs text-green-500 mt-2">Copied!</p>}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-3 border border-gray-700 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowPaymentModal(false);
                  onNavigate('dashboard');
                }}
                disabled={!selectedPayment}
                className="flex-1 py-3 bg-gold-500 text-void-900 font-semibold hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Upgrade
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
