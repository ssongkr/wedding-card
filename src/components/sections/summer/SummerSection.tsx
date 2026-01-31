'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';

interface SummerSectionProps {
  date?: string;
  time?: string;
  venueName?: string;
  venueHall?: string;
  venueAddress?: string;
  venuePhone?: string;
  mapUrl?: string;
  transport?: {
    subway?: string;
    bus?: string;
    car?: string;
  };
}

export function SummerSection({
  date = '2025년 5월 10일',
  time = '오후 2시',
  venueName = '예식장',
  venueHall = '그랜드홀',
  venueAddress = '서울시 강남구',
  venuePhone,
  mapUrl,
  transport,
}: SummerSectionProps) {
  const handleOpenMap = () => {
    if (mapUrl) {
      window.open(mapUrl, '_blank');
    }
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(venueAddress);
      alert('주소가 복사되었습니다.');
    } catch {
      alert('주소 복사에 실패했습니다.');
    }
  };

  return (
    <Section id="summer" className="flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <motion.h2
          className="font-[var(--font-noto-serif)] text-2xl text-center text-wedding-text mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          예식 안내
        </motion.h2>

        {/* 예식 정보 카드 */}
        <motion.div
          className="soft-card mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center space-y-4">
            <div>
              <p className="text-wedding-pink font-medium text-lg">{date}</p>
              <p className="text-wedding-text-muted">{time}</p>
            </div>

            <div className="w-12 h-px bg-wedding-pink/40 mx-auto" />

            <div>
              <p className="font-medium text-wedding-text text-lg">{venueName}</p>
              {venueHall && (
                <p className="text-wedding-text-muted text-sm">{venueHall}</p>
              )}
              <p className="text-wedding-text-muted text-sm mt-1">{venueAddress}</p>
              {venuePhone && (
                <p className="text-wedding-gold text-xs mt-2">
                  Tel. {venuePhone}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* 버튼들 */}
        <motion.div
          className="flex gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {mapUrl && (
            <button onClick={handleOpenMap} className="soft-button">
              지도 보기
            </button>
          )}
          <button onClick={handleCopyAddress} className="soft-button">
            주소 복사
          </button>
        </motion.div>

        {/* 교통 안내 */}
        {transport && (
          <motion.div
            className="soft-card mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-medium text-wedding-text mb-4 text-center text-sm">
              오시는 길
            </h3>
            <div className="space-y-3 text-sm">
              {transport.subway && (
                <div className="flex gap-3">
                  <span className="text-wedding-pink font-medium min-w-[50px]">
                    지하철
                  </span>
                  <span className="text-wedding-text-muted">{transport.subway}</span>
                </div>
              )}
              {transport.bus && (
                <div className="flex gap-3">
                  <span className="text-wedding-pink font-medium min-w-[50px]">
                    버스
                  </span>
                  <span className="text-wedding-text-muted">{transport.bus}</span>
                </div>
              )}
              {transport.car && (
                <div className="flex gap-3">
                  <span className="text-wedding-pink font-medium min-w-[50px]">
                    자가용
                  </span>
                  <span className="text-wedding-text-muted">{transport.car}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
