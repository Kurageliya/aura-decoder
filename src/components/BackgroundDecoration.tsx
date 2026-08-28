import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-gradient-to-br from-[#FFE4E1] via-[#FFF8DC] to-[#E6E6FA]">
      {/* Gold foil subtle texture pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 0.75px, transparent 0.75px), radial-gradient(#F4E5C2 0.75px, #FFE4E1 0.75px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      />

      {/* Dreamy Bokeh Light Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.55, 0.3],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-[#FFE4E1]/80 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.5, 0.25],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-[#E6E6FA]/90 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-[#FFF8DC] blur-3xl"
      />

      {/* Pulsing Soft Gold Bokeh Lights */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '15%', left: '18%', size: 'w-24 h-24', delay: 0 },
          { top: '65%', left: '10%', size: 'w-32 h-32', delay: 1.5 },
          { top: '25%', left: '80%', size: 'w-28 h-28', delay: 0.8 },
          { top: '75%', left: '75%', size: 'w-36 h-36', delay: 2.2 },
        ].map((bokeh, index) => (
          <motion.div
            key={index}
            animate={{
              opacity: [0.15, 0.45, 0.15],
              scale: [0.9, 1.15, 0.9],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: bokeh.delay,
            }}
            className={`absolute ${bokeh.size} rounded-full bg-[#D4AF37]/20 blur-2xl`}
            style={{ top: bokeh.top, left: bokeh.left }}
          />
        ))}
      </div>

      {/* Floating Sparkles & Tiny Stars */}
      <div className="absolute inset-0 opacity-70">
        {[
          { top: '12%', left: '15%', size: 'text-xs', symbol: '✦', delay: 0 },
          { top: '22%', left: '85%', size: 'text-sm', symbol: '✨', delay: 0.7 },
          { top: '45%', left: '8%', size: 'text-xs', symbol: '✧', delay: 1.4 },
          { top: '58%', left: '92%', size: 'text-xs', symbol: '✦', delay: 2.1 },
          { top: '80%', left: '18%', size: 'text-sm', symbol: '✨', delay: 1.1 },
          { top: '88%', left: '82%', size: 'text-xs', symbol: '✧', delay: 2.8 },
        ].map((star, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: star.delay,
            }}
            className={`absolute ${star.size} text-[#B8860B]/70 select-none font-serif`}
            style={{ top: star.top, left: star.left }}
          >
            {star.symbol}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
