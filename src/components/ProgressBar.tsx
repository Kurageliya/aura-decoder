import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full max-w-md mx-auto mb-6 px-1 relative z-10">
      <div className="flex justify-between items-center text-xs font-semibold text-[#4A4A4A] mb-2">
        <span className="font-serif-elegant tracking-wide flex items-center gap-1">
          <span className="text-[#D4AF37]">✦</span> Pertanyaan <span className="text-[#8B6508] font-bold">{currentStep}</span> dari {totalSteps}
        </span>
        <span className="bg-gradient-to-r from-[#FFE4E1] to-[#FFF8DC] text-[#8B6508] px-3 py-0.5 rounded-full text-[11px] font-bold border border-[#D4AF37]/40 shadow-xs">
          {percentage}%
        </span>
      </div>

      <div className="w-full h-3 bg-white/60 backdrop-blur-xs rounded-full overflow-hidden p-0.5 border border-[#D4AF37]/40 shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-[#D8BFD8] via-[#E8B4B8] to-[#D4AF37] rounded-full shadow-xs"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};
