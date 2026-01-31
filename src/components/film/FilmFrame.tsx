'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface FilmFrameProps {
  children: ReactNode;
  frameNumber?: string;
  className?: string;
}

function SprocketHoles({ count = 8 }: { count?: number }) {
  return (
    <>
      <div className="film-sprockets film-sprockets-left">
        {Array.from({ length: count }).map((_, i) => (
          <div key={`left-${i}`} className="sprocket-hole" />
        ))}
      </div>
      <div className="film-sprockets film-sprockets-right">
        {Array.from({ length: count }).map((_, i) => (
          <div key={`right-${i}`} className="sprocket-hole" />
        ))}
      </div>
    </>
  );
}

export function FilmFrame({ children, frameNumber, className = '' }: FilmFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 필름 릴 넘어가는 효과
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <motion.div
      ref={ref}
      className={`relative min-h-screen bg-film-bg ${className}`}
      style={{ y }}
    >
      {/* Sprocket holes */}
      <SprocketHoles count={10} />

      {/* Film frame border */}
      <div className="absolute inset-x-8 inset-y-4 film-border" />

      {/* Frame number (like film edge marking) */}
      {frameNumber && (
        <div className="absolute top-6 left-12 z-20">
          <span className="font-mono text-xs text-film-sepia/60 tracking-wider">
            {frameNumber}
          </span>
        </div>
      )}

      {/* Content area */}
      <div className="relative z-10 min-h-screen px-12 py-8">
        {children}
      </div>

      {/* Film grain overlay */}
      <div className="film-grain absolute inset-0 pointer-events-none" />

      {/* Vignette effect */}
      <div className="vignette absolute inset-0 pointer-events-none" />

      {/* Random film scratches */}
      <div className="film-scratch" style={{ left: '15%' }} />
      <div className="film-scratch" style={{ left: '75%', animationDelay: '3s' }} />
    </motion.div>
  );
}
