'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxBackground({ children, className = '' }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 배경은 느리게 (0.3배 속도)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* 패럴랙스 배경 장식 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* 부드러운 원형 장식들 */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* 부드러운 그라데이션 */}
            <radialGradient id="pinkGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f8b4b8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f8b4b8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c9a86c" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#c9a86c" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="blushGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fcd5d8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#fcd5d8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 큰 부드러운 원들 */}
          <circle cx="50" cy="100" r="120" fill="url(#pinkGlow)" />
          <circle cx="350" cy="200" r="100" fill="url(#blushGlow)" />
          <circle cx="100" cy="400" r="80" fill="url(#goldGlow)" />
          <circle cx="300" cy="500" r="140" fill="url(#pinkGlow)" />

          {/* 작은 점 장식들 */}
          <circle cx="80" cy="50" r="3" fill="#f8b4b8" opacity="0.3" />
          <circle cx="320" cy="80" r="2" fill="#c9a86c" opacity="0.25" />
          <circle cx="60" cy="250" r="2.5" fill="#f8b4b8" opacity="0.2" />
          <circle cx="340" cy="350" r="3" fill="#fcd5d8" opacity="0.3" />
          <circle cx="200" cy="150" r="2" fill="#c9a86c" opacity="0.2" />
          <circle cx="150" cy="450" r="2" fill="#f8b4b8" opacity="0.25" />
          <circle cx="250" cy="550" r="3" fill="#fcd5d8" opacity="0.2" />

          {/* 부드러운 곡선 */}
          <path
            d="M0 300 Q100 250 200 300 T400 300"
            stroke="#f8b4b8"
            strokeWidth="1"
            fill="none"
            opacity="0.15"
          />
          <path
            d="M0 400 Q150 350 300 400 T400 380"
            stroke="#c9a86c"
            strokeWidth="0.5"
            fill="none"
            opacity="0.1"
          />
        </svg>
      </motion.div>

      {/* 콘텐츠 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
