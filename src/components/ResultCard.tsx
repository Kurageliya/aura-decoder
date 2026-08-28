import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RESULTS } from '../data/quizData';
import { RotateCcw, CheckCircle, Sparkles, Heart, Gift, X } from 'lucide-react';

interface ResultCardProps {
  score: number;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ score, onReset }) => {
  const isTimeless = score >= 5;
  const result = isTimeless ? RESULTS.TIMELESS_ELEGANT : RESULTS.AESTHETIC_ROMANTIC;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Lightweight initial confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4E5C2', '#E8B4B8', '#D8BFD8', '#B8860B']
    });
  }, []);

  const handleClaimSurprise = () => {
    setShowModal(true);

    // Heart & Gold Confetti Burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#F472B6', '#FB7185', '#D4AF37', '#F4E5C2', '#E8B4B8']
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="w-full max-w-md mx-auto my-3 relative z-10 gpu-smooth"
      >
        <div className="bg-[#FFFDF9] border-2 border-[#D4AF37]/45 shadow-lg shadow-[#D4AF37]/10 rounded-[24px] p-6 sm:p-8 text-center relative overflow-hidden">
          {/* Top Highlight Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-90" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#FFE4E1] via-[#FFF8DC] to-[#FFE4E1] border border-[#D4AF37] text-[#8B6508] text-xs font-semibold shadow-2xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{result.badgeText}</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>

          {/* Persona Title */}
          <h2 className="text-2xl sm:text-3xl font-serif-elegant font-bold text-gold-gradient leading-tight mb-2">
            {result.title}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-[#4A4A4A] italic mb-6 px-2">
            &ldquo;{result.tagline}&rdquo;
          </p>

          {/* Personality Box */}
          <div className="bg-gradient-to-r from-white via-[#FFE4E1]/30 to-white border border-[#D4AF37]/40 rounded-[16px] p-4 sm:p-5 text-left mb-6 space-y-3 shadow-2xs">
            <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
              {result.description}
            </p>

            {/* Traits */}
            <div className="pt-3 border-t border-[#D4AF37]/30">
              <p className="text-[11px] font-bold text-[#8B6508] uppercase tracking-wider mb-2">
                Karakter Utama Aura Kamu:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {result.traits.map((trait, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#D4AF37]/30 text-[#2D1F33] px-2.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-2xs"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sweet Romantic Surprise Banner */}
          <div className="bg-gradient-to-r from-[#FFE4E1]/80 via-[#FFF8DC]/80 to-[#FFE4E1]/80 border border-[#D4AF37]/50 rounded-[16px] p-4 mb-6 text-left shadow-2xs">
            <p className="text-xs sm:text-sm font-bold text-[#8B6508] mb-1 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-[#D4AF37]" />
              <span>Kejutan Spesial Siap Menantimu!</span>
            </p>
            <p className="text-xs text-[#4A4A4A] leading-relaxed">
              Auramu telah selesai dibaca secara sempurna. Kejutan manis sedang disiapkan spesial untukmu... ✨
            </p>
          </div>

          {/* Claim Action Button */}
          <button
            onClick={handleClaimSurprise}
            className="w-full py-4 px-8 rounded-full shimmer-button text-[#2D1F33] font-bold text-base flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer border border-white/60 mb-3 shadow-md"
          >
            <span>✨ Klaim Kejutan Spesial ✨</span>
          </button>

          {/* Reset Quiz */}
          <button
            onClick={onReset}
            className="text-xs text-[#8B6508] hover:text-[#2D1F33] font-semibold flex items-center justify-center gap-1.5 mx-auto py-2 px-4 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ulangi Kuis Aura</span>
          </button>
        </div>
      </motion.div>

      {/* Pop-up Modal for Claiming Surprise (Optimized for Mobile) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-[24px] p-6 sm:p-8 max-w-sm w-full text-center relative overflow-hidden shadow-2xl gpu-smooth"
            >
              {/* Top Gold Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFE4E1] text-[#8B6508] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Animated Floating Hearts / Gifts Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFE4E1] via-[#FFF8DC] to-[#E6E6FA] border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4 shadow-sm relative">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                <Sparkles className="w-4 h-4 text-[#D4AF37] absolute -top-1 -right-1" />
              </div>

              {/* Modal Title */}
              <h3 className="text-xl font-serif-elegant font-bold text-gold-gradient mb-2">
                Kejutan Berhasil Diklaim! ✨
              </h3>

              {/* Modal Message */}
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6 font-normal">
                Terima kasih sudah menyelesaikan kuis ini, sayang! Kejutan paling manis sedang dalam perjalanan khusus untukmu... Ditunggu ya! 💖🎁
              </p>

              {/* Modal Confirmation Button */}
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 px-6 rounded-full shimmer-button text-[#2D1F33] font-bold text-sm flex items-center justify-center gap-2 border border-white/60 active:scale-95 transition-transform cursor-pointer shadow-md"
              >
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>💖 Terimakasih Sayang</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
