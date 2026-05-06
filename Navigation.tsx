import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight } from 'lucide-react';
import type { Page } from '../App';
import { getLawById } from '../data/laws';
import { useGameStore } from '../store/gameStore';
import { useState } from 'react';

interface QuizChallengeProps {
  lawId: string;
  onNavigate: (page: Page, lawId?: string) => void;
  onShowXp: (amount: number, message: string) => void;
}

export function QuizChallenge({ lawId, onNavigate, onShowXp }: QuizChallengeProps) {
  const law = getLawById(lawId);
  const { addQuizScore } = useGameStore();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string; correct: boolean; selected: number }[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!law) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl text-white">Law not found</h1>
      </div>
    );
  }

  const questions = law.quiz;
  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  const handleAnswer = (index: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    const correct = index === currentQ.correctAnswer;
    if (correct) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, { questionId: currentQ.id, correct, selected: index }]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz completed
      const totalQuestions = questions.length;
      const actualScore = answers.filter(a => a.correct).length + (isCorrect && answers.length < questions.length ? 1 : 0);
      
      addQuizScore({
        lawId,
        score: actualScore,
        totalQuestions,
        completedAt: new Date().toISOString(),
      });
      
      setQuizCompleted(true);
      
      // Show XP notification
      const xpEarned = Math.floor((actualScore / totalQuestions) * 20);
      onShowXp(xpEarned, 'Quiz Completed!');
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage === 100) return 'Perfect! You are a master!';
    if (percentage >= 80) return 'Excellent work!';
    if (percentage >= 60) return 'Good job! Keep learning!';
    if (percentage >= 40) return 'Not bad! Review and try again!';
    return 'Keep studying! You will improve!';
  };

  const getScoreColor = (percentage: number) => {
    if (percentage === 100) return 'text-green-400';
    if (percentage >= 80) return 'text-[#D4AF37]';
    if (percentage >= 60) return 'text-blue-400';
    return 'text-orange-400';
  };

  if (quizCompleted) {
    const totalQuestions = questions.length;
    const finalScore = answers.filter(a => a.correct).length;
    const percentage = Math.round((finalScore / totalQuestions) * 100);
    
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5 }}
              className="w-24 h-24 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#E8C547] rounded-full flex items-center justify-center mb-6"
            >
              <Trophy className="w-12 h-12 text-[#0D0D15]" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-white mb-2">Quiz Completed!</h1>
            <p className={`text-xl font-semibold ${getScoreColor(percentage)}`}>
              {getScoreMessage(percentage)}
            </p>
          </div>

          <div className="bg-[#1E1E2D] rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">{finalScore}</p>
                <p className="text-sm text-gray-500">Correct</p>
              </div>
              <div className="text-2xl text-gray-600">/</div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-400">{totalQuestions}</p>
                <p className="text-sm text-gray-500">Total</p>
              </div>
            </div>
            
            <div className="h-4 bg-[#0D0D15] rounded-full overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full ${
                  percentage === 100 ? 'bg-green-500' :
                  percentage >= 80 ? 'bg-[#D4AF37]' :
                  percentage >= 60 ? 'bg-blue-500' :
                  'bg-orange-500'
                }`}
              />
            </div>
            
            <p className="text-2xl font-bold text-white">{percentage}%</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRetry}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1E1E2D] hover:bg-[#252542] text-white font-semibold rounded-lg transition-colors border border-gray-800"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('laws')}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#E8C547] text-[#0D0D15] font-semibold rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
              Continue Learning
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <button
          onClick={() => onNavigate('law-detail', lawId)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Law</span>
        </button>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <div className="flex gap-1 mb-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-2 rounded-full transition-colors ${
                index < currentQuestion ? 'bg-green-500' :
                index === currentQuestion ? 'bg-[#D4AF37]' :
                'bg-gray-800'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-[#1E1E2D] rounded-xl p-6 md:p-8 border border-gray-800 mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-8">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQ.correctAnswer;
                const showCorrect = showFeedback && isCorrectAnswer;
                const showWrong = showFeedback && isSelected && !isCorrectAnswer;

                return (
                  <motion.button
                    key={index}
                    whileHover={!showFeedback ? { scale: 1.02 } : {}}
                    whileTap={!showFeedback ? { scale: 0.98 } : {}}
                    onClick={() => handleAnswer(index)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      showCorrect
                        ? 'border-green-500 bg-green-500/10'
                        : showWrong
                        ? 'border-red-500 bg-red-500/10'
                        : isSelected
                        ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                        : 'border-gray-800 hover:border-gray-700 bg-[#0D0D15]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        showCorrect
                          ? 'bg-green-500'
                          : showWrong
                          ? 'bg-red-500'
                          : isSelected
                          ? 'bg-[#D4AF37]'
                          : 'bg-gray-800'
                      }`}>
                        {showCorrect ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : showWrong ? (
                          <XCircle className="w-5 h-5 text-white" />
                        ) : (
                          <span className={`text-sm font-semibold ${
                            isSelected ? 'text-[#0D0D15]' : 'text-gray-400'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                        )}
                      </div>
                      <span className={`flex-1 ${
                        showCorrect
                          ? 'text-green-400'
                          : showWrong
                          ? 'text-red-400'
                          : 'text-white'
                      }`}>
                        {option}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Feedback */}
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-xl p-6 mb-6 ${
                isCorrect
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                )}
                <div>
                  <h3 className={`font-semibold mb-2 ${
                    isCorrect ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </h3>
                  <p className="text-gray-300">{currentQ.explanation}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Next Button */}
          {showFeedback && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              className="w-full py-4 bg-[#D4AF37] hover:bg-[#E8C547] text-[#0D0D15] font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {currentQuestion < questions.length - 1 ? (
                <>
                  Next Question
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Finish Quiz
                  <Trophy className="w-5 h-5" />
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
