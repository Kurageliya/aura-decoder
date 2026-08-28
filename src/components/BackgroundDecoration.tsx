import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#FDFBF7]">
      {/* 60fps Native Radial Ambient Gradients (No heavy CSS blur filters) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 10% 10%, rgba(255, 228, 225, 0.75) 0%, transparent 45%),
            radial-gradient(circle at 90% 25%, rgba(230, 230, 250, 0.75) 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(255, 248, 220, 0.75) 0%, transparent 50%)
          `,
        }}
      />

      {/* Gold Foil Pattern Overlay (Subtle, 4% Opacity) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle Lightweight Sparkles (Light Opacity Transitions Only) */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        {[
          { top: '12%', left: '15%', symbol: '✦', delay: 0 },
          { top: '22%', left: '85%', symbol: '✨', delay: 1 },
          { top: '55%', left: '8%', symbol: '✧', delay: 2 },
          { top: '78%', left: '88%', symbol: '✨', delay: 1.5 },
        ].map((star, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
            className="absolute text-xs text-[#B8860B]/70 select-none font-serif gpu-smooth"
            style={{ top: star.top, left: star.left }}
          >
            {star.symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
