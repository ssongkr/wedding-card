'use client';

import { motion } from 'framer-motion';

interface SpringSectionProps {
  groomName?: string;
  brideName?: string;
  weddingDate?: string;
  weddingTime?: string;
  mainImage?: string;
}

export function SpringSection({
  groomName = '신랑',
  brideName = '신부',
  weddingDate,
  weddingTime = '오후 2시',
  mainImage = '/images/1.jpg',
}: SpringSectionProps) {
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
    <section id="spring" className="min-h-screen px-6 py-12 flex flex-col">
      {/* 상단 타이틀 */}
      <motion.p
        className="text-center text-wedding-pink text-xs tracking-[0.3em] font-light mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        WEDDING INVITATION
      </motion.p>

      {/* 메인 이미지 */}
      <motion.div
        className="flex-1 max-w-md mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={mainImage}
            alt="Wedding"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* 이름 */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h1 className="font-[var(--font-noto-serif)] text-3xl text-wedding-text tracking-wider">
          {groomName}
          <span className="mx-3 text-xl text-wedding-pink">&</span>
          {brideName}
        </h1>
      </motion.div>

      {/* 날짜 */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {dateInfo && (
          <div className="space-y-1">
            <p className="text-lg text-wedding-text tracking-[0.1em]">
              {dateInfo.year}. {dateInfo.month}. {dateInfo.day}
            </p>
            <p className="text-sm text-wedding-text-muted">
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
          <div className="w-px h-8 bg-gradient-to-b from-wedding-pink/60 to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
