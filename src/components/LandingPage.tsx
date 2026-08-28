import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Clock, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-md mx-auto relative z-10 my-4"
    >
      {/* Main Luxury Glassmorphic Card */}
      <div
        className="bg-white/70 backdrop-blur-[10px] rounded-[24px] p-6 sm:p-9 text-center relative overflow-hidden transition-all duration-300"
        style={{
          border: '1px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 20px 60px rgba(212, 175, 55, 0.15), 0 8px 20px rgba(0,0,0,0.08), inset 0 1px 0 0 rgba(255,255,255,0.85)',
        }}
      >
        {/* Subtle Top Gold Highlight Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFE4E1] via-[#FFF8DC] to-[#FFE4E1] border border-[#D4AF37] text-[#8B6508] text-xs font-semibold shadow-xs mb-6 tracking-wide">
          <span className="text-[#D4AF37] text-[10px]">✦</span>
          <span>Kuis Kepribadian Spesial</span>
          <span className="text-[#D4AF37] text-[10px]">✦</span>
        </div>

        {/* Title Section */}
        <div className="mb-6">
          <h1
            className="text-3xl sm:text-[40px] font-serif-elegant font-bold leading-tight tracking-tight text-gold-gradient"
            style={{
              textShadow: '0 2px 10px rgba(212, 175, 55, 0.15)',
            }}
          >
            The Aura Decoder
          </h1>
          <span className="block font-script text-2xl sm:text-3xl text-[#D4AF37] mt-1 -rotate-1 font-semibold">
            Edisi Spesial
          </span>

          {/* Decorative Gold Divider */}
          <div className="flex items-center justify-center gap-2 mt-4 opacity-80">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[10px] text-[#D4AF37]">•</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span className="text-[10px] text-[#D4AF37]">•</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>

        {/* Description Text */}
        <p className="text-[16px] leading-[1.6] text-[#4A4A4A] max-w-[90%] mx-auto mb-7 font-normal">
          Setiap orang punya &lsquo;vibe&rsquo; yang berubah-ubah. Kuis singkat ini bakal membacakan aura kamu di fase ini. Cuma butuh 2 menit!
        </p>

        {/* Luxury Info Box */}
        <div className="bg-gradient-to-r from-white/40 via-[#FFE4E1]/30 to-white/40 border border-[#D4AF37]/40 rounded-[16px] p-4 mb-8 text-left space-y-3 shadow-xs">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-[#4A4A4A] font-medium">
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Jumlah Pertanyaan</span>
            </div>
            <span className="bg-[#F4E5C2]/60 text-[#8B6508] border border-[#D4AF37]/40 px-3 py-0.5 rounded-full text-xs font-bold shadow-2xs">
              10 Pertanyaan
            </span>
          </div>

          <div className="h-[1px] w-full bg-[#D4AF37]/20" />

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-[#4A4A4A] font-medium">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Estimasi Waktu</span>
            </div>
            <span className="bg-[#F4E5C2]/60 text-[#8B6508] border border-[#D4AF37]/40 px-3 py-0.5 rounded-full text-xs font-bold shadow-2xs">
              ~2 Menit
            </span>
          </div>
        </div>

        {/* Luxury CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onStart}
          className="w-full py-4 px-8 rounded-full shimmer-button btn-glow-lux text-[#2D1F33] font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer border border-white/60"
        >
          <span>Mulai Membaca Aura</span>
          <span className="text-lg">✨</span>
        </motion.button>

        {/* Footer Text */}
        <p className="text-xs italic text-[#4A4A4A]/60 mt-5 font-normal flex items-center justify-center gap-1.5">
          <span className="text-[#D4AF37] text-[10px]">✧</span>
          <span>Pilih sesuai dengan intuisi dan kata hatimu</span>
          <span className="text-[#D4AF37] text-[10px]">✧</span>
        </p>
      </div>
    </motion.div>
  );
};
