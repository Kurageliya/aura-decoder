import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, QuizOption } from '../data/quizData';

interface QuizCardProps {
  question: Question;
  onSelectOption: (option: QuizOption) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onSelectOption }) => {
  const [selectedId, setSelectedId] = useState<'A' | 'B' | null>(null);

  useEffect(() => {
    setSelectedId(null);
  }, [question.id]);

  const handleCardClick = (option: QuizOption) => {
    if (selectedId) return;
    setSelectedId(option.id);

    setTimeout(() => {
      onSelectOption(option);
    }, 400);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full max-w-md mx-auto relative z-10 gpu-smooth"
      >
        <div className="bg-[#FFFDF9] border-2 border-[#D4AF37]/45 shadow-lg shadow-[#D4AF37]/10 rounded-[24px] p-6 sm:p-8 relative overflow-hidden">
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-90" />

          {/* Category Tag */}
          <div className="flex items-center justify-between mb-5">
            <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FFE4E1] via-[#FFF8DC] to-[#FFE4E1] border border-[#D4AF37]/50 text-[#8B6508] text-xs font-semibold shadow-2xs">
              <span className="text-[10px] text-[#D4AF37]">✦</span>
              <span>{question.categoryText}</span>
            </span>
            <span className="text-xs font-bold text-[#8B6508] font-serif-elegant">
              #{question.id}/10
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-serif-elegant font-bold text-[#2D1F33] leading-snug mb-6">
            {question.question}
          </h2>

          {/* Option Cards */}
          <div className="space-y-3.5">
            {[question.optionA, question.optionB].map((option) => {
              const isSelected = selectedId === option.id;
              const isOtherSelected = selectedId !== null && !isSelected;

              return (
                <button
                  key={option.id}
                  onClick={() => handleCardClick(option)}
                  disabled={selectedId !== null}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-start gap-3.5 cursor-pointer active:scale-98 ${
                    isSelected
                      ? 'shimmer-button border-[#D4AF37] text-[#2D1F33] shadow-md'
                      : isOtherSelected
                      ? 'bg-white/40 border-gray-200/50 opacity-40 cursor-not-allowed'
                      : 'bg-white hover:bg-[#FFF8DC]/60 border-[#D4AF37]/35 text-[#2D1F33]'
                  }`}
                >
                  {/* Option Letter Badge A / B */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                      isSelected
                        ? 'bg-[#8B6508] text-white shadow-xs'
                        : 'bg-gradient-to-r from-[#FFE4E1] to-[#FFF8DC] text-[#8B6508] border border-[#D4AF37]/50'
                    }`}
                  >
                    {option.id}
                  </div>

                  {/* Option Text */}
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-medium leading-relaxed">
                      {option.text}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Hint */}
          <div className="mt-5 text-center">
            <span className="text-[11px] text-[#8B6508]/80 font-medium italic">
              {selectedId ? 'Menyiapkan pertanyaan berikutnya...' : 'Pilih jawaban sesuai kata hatimu ✨'}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
