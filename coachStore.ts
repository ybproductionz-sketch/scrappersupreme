import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from './store/gameStore';
import { useTierStore } from './store/tierStore';
import { Dashboard } from './pages/Dashboard';
import { LawsLibrary } from './pages/LawsLibrary';
import { LawDetail } from './pages/LawDetail';
import { QuizChallenge } from './pages/QuizChallenge';
import { Profile } from './pages/Profile';
import { Achievements } from './pages/Achievements';
import { Leaderboard } from './pages/Leaderboard';
import { Membership } from './pages/Membership';
import { Coaching } from './pages/Coaching';
import { Navigation } from './components/Navigation';
import { MobileNav } from './components/MobileNav';
import { XpNotification } from './components/XpNotification';
import { TierLock } from './components/TierLock';
import { useState } from 'react';

export type Page = 'dashboard' | 'laws' | 'law-detail' | 'quiz' | 'profile' | 'achievements' | 'leaderboard' | 'membership' | 'coaching';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedLawId, setSelectedLawId] = useState<string | null>(null);
  const [xpNotification, setXpNotification] = useState<{ amount: number; message: string } | null>(null);
  
  const { updateStreak, streak } = useGameStore();
  const { tier } = useTierStore();

  useEffect(() => {
    updateStreak();
  }, [updateStreak]);

  useEffect(() => {
    if (streak > 1) {
      showXpNotification(streak * 10, `${streak} Day Streak Bonus`);
    }
  }, [streak]);

  const showXpNotification = (amount: number, message: string) => {
    setXpNotification({ amount, message });
    setTimeout(() => setXpNotification(null), 3000);
  };

  const navigateTo = (page: Page, lawId?: string) => {
    if (lawId) {
      setSelectedLawId(lawId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Check tier access for certain pages
    if (tier === 'none' && ['laws', 'law-detail', 'quiz', 'achievements'].includes(currentPage)) {
      return <TierLock onNavigate={navigateTo} />;
    }

    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={navigateTo} onShowXp={showXpNotification} />;
      case 'laws':
        return <LawsLibrary onNavigate={navigateTo} />;
      case 'law-detail':
        return selectedLawId ? (
          <LawDetail lawId={selectedLawId} onNavigate={navigateTo} onShowXp={showXpNotification} />
        ) : (
          <LawsLibrary onNavigate={navigateTo} />
        );
      case 'quiz':
        return selectedLawId ? (
          <QuizChallenge lawId={selectedLawId} onNavigate={navigateTo} onShowXp={showXpNotification} />
        ) : (
          <LawsLibrary onNavigate={navigateTo} />
        );
      case 'profile':
        return <Profile onNavigate={navigateTo} />;
      case 'achievements':
        return <Achievements onNavigate={navigateTo} onShowXp={showXpNotification} />;
      case 'leaderboard':
        return <Leaderboard onNavigate={navigateTo} />;
      case 'membership':
        return <Membership onNavigate={navigateTo} />;
      case 'coaching':
        return <Coaching onNavigate={navigateTo} />;
      default:
        return <Dashboard onNavigate={navigateTo} onShowXp={showXpNotification} />;
    }
  };

  return (
    <div className="min-h-screen bg-void-900 text-white font-body selection:bg-gold-500/30">
      {/* Noise Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content */}
      <main className="pt-20 pb-24 md:pb-0 min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Navigation */}
      <MobileNav currentPage={currentPage} onNavigate={navigateTo} />

      {/* XP Notification */}
      {xpNotification && (
        <XpNotification 
          amount={xpNotification.amount} 
          message={xpNotification.message} 
        />
      )}
    </div>
  );
}

export default App;
