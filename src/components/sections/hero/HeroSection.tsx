'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  groomName?: string;
  brideName?: string;
  weddingDate?: string;
  weddingTime?: string;
  mainImage?: string;
}

export function HeroSection({
  groomName = '신랑',
  brideName = '신부',
  weddingDate,
  weddingTime = '오후 2시',
  mainImage = '/images/1.jpg',
}: HeroSectionProps) {
  const formatWeddingDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];
    return { year, month, day, weekday };
  };

  const dateInfo = weddingDate ? formatWeddingDate(weddingDate) : null;

  return (
    <section id="hero" className="flex flex-col px-6 py-12">
      {/* 상단 타이틀 */}
      <motion.p
        className="text-wedding-pink mb-8 text-center text-xs font-light tracking-[0.3em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        WEDDING INVITATION
      </motion.p>

      {/* 메인 이미지 - 심플 액자 */}
      <motion.div
        className="mx-auto my-8 w-full max-w-md flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="bg-wedding-brown/80 relative aspect-[3/4] rounded-sm p-2">
          <div className="relative h-full w-full overflow-hidden">
            <img src={mainImage} alt="Wedding" className="h-full w-full object-cover" />
            {/* 내부 비네팅 (들어간 느낌) */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* 이름 */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h1 className="text-wedding-text text-3xl font-[var(--font-noto-serif)] tracking-wider">
          {groomName}
          <span className="text-wedding-pink mx-3 text-xl">&</span>
          {brideName}
        </h1>
      </motion.div>

      {/* 날짜 */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {dateInfo && (
          <div className="space-y-1">
            <p className="text-wedding-text text-lg tracking-[0.1em]">
              {dateInfo.year}. {dateInfo.month}. {dateInfo.day}
            </p>
            <p className="text-wedding-text-muted text-sm">
              {dateInfo.weekday}요일 {weddingTime}
            </p>
          </div>
        )}

        {/* 스크롤 안내 */}
        <motion.div
          className="mt-10"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="from-wedding-pink/60 mx-auto h-8 w-px bg-gradient-to-b to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
