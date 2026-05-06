import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type MembershipTier = 'none' | 'apprentice' | 'lieutenant' | 'boss' | 'king';

export interface TierBenefits {
  maxLaws: number;
  quizAccess: boolean;
  advancedQuizzes: boolean;
  coachingCalls: boolean;
  oneOnOneMentorship: boolean;
  mastermindAccess: boolean;
  certificationPath: boolean;
  directMentorLine: boolean;
  annualSummit: boolean;
  equityAccess: boolean;
}

export const TIER_BENEFITS: Record<MembershipTier, TierBenefits> = {
  none: {
    maxLaws: 0,
    quizAccess: false,
    advancedQuizzes: false,
    coachingCalls: false,
    oneOnOneMentorship: false,
    mastermindAccess: false,
    certificationPath: false,
    directMentorLine: false,
    annualSummit: false,
    equityAccess: false,
  },
  apprentice: {
    maxLaws: 12,
    quizAccess: true,
    advancedQuizzes: false,
    coachingCalls: false,
    oneOnOneMentorship: false,
    mastermindAccess: false,
    certificationPath: false,
    directMentorLine: false,
    annualSummit: false,
    equityAccess: false,
  },
  lieutenant: {
    maxLaws: 48,
    quizAccess: true,
    advancedQuizzes: true,
    coachingCalls: true,
    oneOnOneMentorship: false,
    mastermindAccess: false,
    certificationPath: false,
    directMentorLine: false,
    annualSummit: false,
    equityAccess: false,
  },
  boss: {
    maxLaws: 48,
    quizAccess: true,
    advancedQuizzes: true,
    coachingCalls: true,
    oneOnOneMentorship: true,
    mastermindAccess: true,
    certificationPath: true,
    directMentorLine: true,
    annualSummit: false,
    equityAccess: false,
  },
  king: {
    maxLaws: 48,
    quizAccess: true,
    advancedQuizzes: true,
    coachingCalls: true,
    oneOnOneMentorship: true,
    mastermindAccess: true,
    certificationPath: true,
    directMentorLine: true,
    annualSummit: true,
    equityAccess: true,
  },
};

export const TIER_INFO: Record<MembershipTier, { name: string; price: string; description: string }> = {
  none: { name: 'Visitor', price: '', description: 'Request access to begin' },
  apprentice: { name: 'Apprentice', price: '$29/month', description: 'Foundation level access' },
  lieutenant: { name: 'Lieutenant', price: '$79/month', description: 'Full curriculum access' },
  boss: { name: 'Boss', price: '$199/month', description: 'Elite mentorship tier' },
  king: { name: 'Lifetime King', price: '$2,997', description: 'Permanent access & equity' },
};

interface TierState {
  tier: MembershipTier;
  expiresAt: string | null;
  paymentMethod: string | null;
  setTier: (tier: MembershipTier) => void;
  setPaymentMethod: (method: string) => void;
  hasAccess: (lawNumber: number) => boolean;
  canAccessQuiz: (lawNumber: number) => boolean;
  upgradePrompt: () => { show: boolean; message: string; targetTier: MembershipTier };
}

export const useTierStore = create<TierState>()(
  persist(
    (set, get) => ({
      tier: 'lieutenant', // Default for demo - change to 'none' for production
      expiresAt: null,
      paymentMethod: null,

      setTier: (tier: MembershipTier) => {
        set({ tier });
      },

      setPaymentMethod: (method: string) => {
        set({ paymentMethod: method });
      },

      hasAccess: (lawNumber: number) => {
        const { tier } = get();
        return lawNumber <= TIER_BENEFITS[tier].maxLaws;
      },

      canAccessQuiz: (lawNumber: number) => {
        const { tier } = get();
        const benefits = TIER_BENEFITS[tier];
        return benefits.quizAccess && lawNumber <= benefits.maxLaws;
      },

      upgradePrompt: () => {
        const { tier } = get();
        const benefits = TIER_BENEFITS[tier];
        
        if (tier === 'none') {
          return { show: true, message: 'Request membership to access the Laws', targetTier: 'apprentice' };
        }
        if (tier === 'apprentice') {
          return { show: true, message: 'Upgrade to Lieutenant for full access to all 48 Laws', targetTier: 'lieutenant' };
        }
        if (!benefits.oneOnOneMentorship) {
          return { show: true, message: 'Upgrade to Boss for personal coaching and mentorship', targetTier: 'boss' };
        }
        return { show: false, message: '', targetTier: tier };
      },
    }),
    {
      name: 'pimpology-tier-storage',
    }
  )
);
