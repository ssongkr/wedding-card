'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { LiquidGlass } from '@/components/ui/LiquidGlass';

interface VenueSectionProps {
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

// 리퀴드 글래스 버튼 컴포넌트
function GlassButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <LiquidGlass borderRadius={50} className="inline-block">
      <button
        onClick={onClick}
        className="text-wedding-text px-6 py-3 text-sm font-medium transition-transform hover:scale-105 active:scale-95"
      >
        {children}
      </button>
    </LiquidGlass>
  );
}

export function VenueSection({
  date = '2025년 5월 10일',
  time = '오후 2시',
  venueName = '예식장',
  venueHall = '그랜드홀',
  venueAddress = '서울시 강남구',
  venuePhone,
  mapUrl,
  transport,
}: VenueSectionProps) {
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
    <Section id="venue" className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        <motion.h2
          className="text-wedding-text mb-10 text-center text-2xl font-[var(--font-noto-serif)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          예식 안내
        </motion.h2>

        {/* 예식 정보 카드 - 리퀴드 글래스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <LiquidGlass className="mb-6" scale={30} blur={2}>
            <div className="space-y-4 p-6 text-center">
              <div>
                <p className="text-wedding-pink text-lg font-medium">{date}</p>
                <p className="text-wedding-text-muted">{time}</p>
              </div>

              <div className="bg-wedding-pink/40 mx-auto h-px w-12" />

              <div>
                <p className="text-wedding-text text-lg font-medium">{venueName}</p>
                {venueHall && <p className="text-wedding-text-muted text-sm">{venueHall}</p>}
                <p className="text-wedding-text-muted mt-1 text-sm">{venueAddress}</p>
                {venuePhone && <p className="text-wedding-gold mt-2 text-xs">Tel. {venuePhone}</p>}
              </div>
            </div>
          </LiquidGlass>
        </motion.div>

        {/* 버튼들 - 리퀴드 글래스 */}
        <motion.div
          className="flex justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {mapUrl && <GlassButton onClick={handleOpenMap}>지도 보기</GlassButton>}
          <GlassButton onClick={handleCopyAddress}>주소 복사</GlassButton>
        </motion.div>

        {/* 교통 안내 - 리퀴드 글래스 */}
        {transport && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <LiquidGlass className="mt-6" scale={30} blur={2}>
              <div className="p-6">
                <h3 className="text-wedding-text mb-4 text-center text-sm font-medium">
                  오시는 길
                </h3>
                <div className="space-y-3 text-sm">
                  {transport.subway && (
                    <div className="flex gap-3">
                      <span className="text-wedding-pink min-w-[50px] font-medium">지하철</span>
                      <span className="text-wedding-text-muted">{transport.subway}</span>
                    </div>
                  )}
                  {transport.bus && (
                    <div className="flex gap-3">
                      <span className="text-wedding-pink min-w-[50px] font-medium">버스</span>
                      <span className="text-wedding-text-muted">{transport.bus}</span>
                    </div>
                  )}
                  {transport.car && (
                    <div className="flex gap-3">
                      <span className="text-wedding-pink min-w-[50px] font-medium">자가용</span>
                      <span className="text-wedding-text-muted">{transport.car}</span>
                    </div>
                  )}
                </div>
              </div>
            </LiquidGlass>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
