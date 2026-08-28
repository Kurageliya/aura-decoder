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
    // Initial gentle confetti
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4E5C2', '#E8B4B8', '#D8BFD8', '#B8860B']
    });
  }, []);

  const handleClaimSurprise = () => {
    setShowModal(true);

    // Heart & Gold Confetti Explosion for Claiming
    const end = Date.now() + 1.5 * 1000;
    const colors = ['#F472B6', '#FB7185', '#D4AF37', '#F4E5C2', '#E8B4B8'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md mx-auto my-3 relative z-10"
      >
        <div
          className="bg-white/80 backdrop-blur-[10px] rounded-[24px] p-6 sm:p-9 text-center relative overflow-hidden transition-all duration-300"
          style={{
            border: '1px solid rgba(212, 175, 55, 0.5)',
            boxShadow: '0 20px 60px rgba(212, 175, 55, 0.18), 0 8px 20px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255,0.85)',
          }}
        >
          {/* Top Highlight Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

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
          <div className="bg-gradient-to-r from-white/60 via-[#FFE4E1]/30 to-white/60 border border-[#D4AF37]/40 rounded-[16px] p-4 sm:p-5 text-left mb-6 space-y-3 shadow-2xs">
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
                    className="bg-white/90 border border-[#D4AF37]/30 text-[#2D1F33] px-2.5 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 shadow-3xs"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sweet Romantic Surprise Banner */}
          <div className="bg-gradient-to-r from-[#FFE4E1]/70 via-[#FFF8DC]/70 to-[#FFE4E1]/70 border border-[#D4AF37]/50 rounded-[16px] p-4 mb-6 text-left shadow-2xs">
            <p className="text-xs sm:text-sm font-bold text-[#8B6508] mb-1 flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-[#D4AF37]" />
              <span>Kejutan Spesial Siap Menantimu!</span>
            </p>
            <p className="text-xs text-[#4A4A4A] leading-relaxed">
              Auramu telah selesai dibaca secara sempurna. Kejutan manis sedang disiapkan spesial untukmu... ✨
            </p>
          </div>

          {/* Claim Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleClaimSurprise}
            className="w-full py-4 px-8 rounded-full shimmer-button btn-glow-lux text-[#2D1F33] font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer border border-white/60 mb-3"
          >
            <span>✨ Klaim Kejutan Spesial ✨</span>
          </motion.button>

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

      {/* Elegant Pop-up Modal for Claiming Surprise */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white/95 backdrop-blur-[14px] border-2 border-[#D4AF37] rounded-[28px] p-6 sm:p-8 max-w-sm w-full text-center relative overflow-hidden shadow-2xl"
              style={{
                boxShadow: '0 25px 70px rgba(212, 175, 55, 0.25), 0 10px 30px rgba(0,0,0,0.12)',
              }}
            >
              {/* Top Gold Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FFE4E1] hover:bg-[#F4E5C2] text-[#8B6508] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Animated Floating Hearts / Gifts Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFE4E1] via-[#FFF8DC] to-[#E6E6FA] border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4 shadow-md relative">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
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
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(false)}
                className="w-full py-3.5 px-6 rounded-full shimmer-button btn-glow-lux text-[#2D1F33] font-bold text-sm flex items-center justify-center gap-2 border border-white/60 cursor-pointer"
              >
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>💖 Terimakasih Sayang</span>
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
