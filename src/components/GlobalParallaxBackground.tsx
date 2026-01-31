'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function GlobalParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // 그라데이션: 가장 느리게 (스크롤의 10% 속도)
  const gradientY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  // SVG 장식: 조금 더 빠르게 (스크롤의 20% 속도)
  const decorY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* CSS 그라데이션 배경 */}
      <motion.div
        className="absolute inset-x-0"
        style={{
          y: gradientY,
          top: '-50vh',
          height: '550vh',
          background: `
            radial-gradient(circle 120px at 15% 3%, rgba(248, 180, 184, 0.18) 0%, transparent 70%),
            radial-gradient(circle 200px at 85% 8%, rgba(252, 213, 216, 0.15) 0%, transparent 70%),
            radial-gradient(circle 80px at 80% 15%, rgba(201, 168, 108, 0.12) 0%, transparent 70%),
            radial-gradient(circle 180px at 10% 20%, rgba(252, 213, 216, 0.14) 0%, transparent 70%),
            radial-gradient(circle 100px at 20% 28%, rgba(248, 180, 184, 0.1) 0%, transparent 70%),
            radial-gradient(circle 220px at 90% 32%, rgba(248, 180, 184, 0.16) 0%, transparent 70%),
            radial-gradient(circle 70px at 75% 40%, rgba(201, 168, 108, 0.1) 0%, transparent 70%),
            radial-gradient(circle 160px at 5% 45%, rgba(201, 168, 108, 0.12) 0%, transparent 70%),
            radial-gradient(circle 90px at 25% 52%, rgba(252, 213, 216, 0.1) 0%, transparent 70%),
            radial-gradient(circle 200px at 85% 55%, rgba(252, 213, 216, 0.14) 0%, transparent 70%),
            radial-gradient(circle 130px at 70% 62%, rgba(248, 180, 184, 0.12) 0%, transparent 70%),
            radial-gradient(circle 180px at 15% 68%, rgba(248, 180, 184, 0.15) 0%, transparent 70%),
            radial-gradient(circle 60px at 30% 75%, rgba(201, 168, 108, 0.1) 0%, transparent 70%),
            radial-gradient(circle 210px at 90% 78%, rgba(201, 168, 108, 0.13) 0%, transparent 70%),
            radial-gradient(circle 100px at 80% 85%, rgba(252, 213, 216, 0.1) 0%, transparent 70%),
            radial-gradient(circle 170px at 10% 88%, rgba(252, 213, 216, 0.14) 0%, transparent 70%),
            radial-gradient(circle 140px at 50% 95%, rgba(248, 180, 184, 0.12) 0%, transparent 70%)
          `,
        }}
      />
      <motion.svg
        className="absolute w-full"
        style={{ height: '500vh', y: decorY }}
        viewBox="0 0 400 2000"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* 전체에 분포하는 작은 점들 */}
        <circle cx="100" cy="50" r="3" fill="#f8b4b8" opacity="0.25" />
        <circle cx="300" cy="150" r="2.5" fill="#c9a86c" opacity="0.2" />
        <circle cx="50" cy="300" r="3" fill="#fcd5d8" opacity="0.25" />
        <circle cx="350" cy="450" r="2.5" fill="#f8b4b8" opacity="0.2" />
        <circle cx="150" cy="600" r="3" fill="#c9a86c" opacity="0.25" />
        <circle cx="250" cy="750" r="2.5" fill="#fcd5d8" opacity="0.2" />
        <circle cx="80" cy="950" r="3" fill="#c9a86c" opacity="0.25" />
        <circle cx="320" cy="1100" r="2.5" fill="#d4a574" opacity="0.2" />
        <circle cx="180" cy="1250" r="3" fill="#c9a86c" opacity="0.25" />
        <circle cx="60" cy="1400" r="2.5" fill="#f8b4b8" opacity="0.2" />
        <circle cx="300" cy="1550" r="3" fill="#fcd5d8" opacity="0.25" />
        <circle cx="120" cy="1700" r="2.5" fill="#f8b4b8" opacity="0.2" />
        <circle cx="350" cy="1850" r="3" fill="#c9a86c" opacity="0.25" />
        <circle cx="200" cy="1980" r="2.5" fill="#fcd5d8" opacity="0.2" />
      </motion.svg>
    </div>
  );
}
