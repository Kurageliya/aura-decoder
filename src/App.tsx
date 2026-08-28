import { useState } from 'react';
import { BackgroundDecoration } from './components/BackgroundDecoration';
import { LandingPage } from './components/LandingPage';
import { QuizCard } from './components/QuizCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultCard } from './components/ResultCard';
import { QUIZ_QUESTIONS, QuizOption, UserAnswerRecord, RESULTS } from './data/quizData';
import { sendSecretEmailNotification } from './services/emailService';

type QuizPhase = 'landing' | 'quiz' | 'result';

export function App() {
  const [phase, setPhase] = useState<QuizPhase>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);

  const handleStartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setPhase('quiz');
  };

  const handleSelectOption = (option: QuizOption) => {
    const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
    
    // Track full answer record
    const newRecord: UserAnswerRecord = {
      questionId: currentQ.id,
      questionText: currentQ.question,
      selectedOption: option.id,
      selectedText: option.text
    };
    
    const updatedAnswers = [...userAnswers, newRecord];
    setUserAnswers(updatedAnswers);

    // Calculate score (+1 for A, +0 for B)
    const newScore = score + option.points;
    setScore(newScore);

    // Advance to next question or transition to result
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Quiz finished - send background email notification
      const resultObj = newScore >= 5 ? RESULTS.TIMELESS_ELEGANT : RESULTS.AESTHETIC_ROMANTIC;
      sendSecretEmailNotification(resultObj.title, newScore, updatedAnswers);
      
      setPhase('result');
    }
  };

  const handleResetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setPhase('landing');
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 overflow-hidden">
      {/* Ambient background animations */}
      <BackgroundDecoration />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        {/* Progress Bar (Visible only in quiz phase) */}
        {phase === 'quiz' && (
          <ProgressBar
            currentStep={currentQuestionIndex + 1}
            totalSteps={QUIZ_QUESTIONS.length}
          />
        )}

        {/* Dynamic Screens */}
        {phase === 'landing' && <LandingPage onStart={handleStartQuiz} />}

        {phase === 'quiz' && (
          <QuizCard
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            onSelectOption={handleSelectOption}
          />
        )}

        {phase === 'result' && (
          <ResultCard score={score} onReset={handleResetQuiz} />
        )}
      </div>
    </main>
  );
}

export default App;
