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
  groomName = '가람',
  brideName = '진경',
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
    <section className="flex h-svh flex-col px-6 py-12">
      <motion.p
        className="font-alex-brush text-wedding-text mb-6 text-center text-[48px] font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Wedding Day
      </motion.p>
      <motion.div
        className="mx-auto mb-10 w-full max-w-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative aspect-[1/1]">
          <div className="relative h-full w-full overflow-hidden">
            <img src={mainImage} alt="Wedding" className="h-full w-full object-cover" />
          </div>
          <div
            className="pointer-events-none absolute inset-0 backdrop-blur-[2px]"
            style={{
              clipPath:
                'polygon(0% 0%, 0% 100%, 3.75% 100%, 3.75% 2.8%, 96.25% 2.8%, 96.25% 97.2%, 3.75% 97.2%, 3.75% 100%, 100% 100%, 100% 0%)',
            }}
          />
          <div className="pointer-events-none absolute inset-3 border-2 border-white" />
        </div>
      </motion.div>

      <motion.div
        className="text-center"
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
      </motion.div>
    </section>
  );
}
