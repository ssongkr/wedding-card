'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { LiquidGlass } from '@/components/ui/LiquidGlass';
import { NaverMap } from '@/components/map/NaverMap';

interface VenueSectionProps {
  date: string;
  time: string;
  venueName: string;
  venueHall: string;
  venueAddress: string;
  venueRoadAddress: string;
  venuePhone: string;
  mapUrl: string;
  lat: number;
  lng: number;
  transport: {
    subway: string;
    bus: string;
    car: string;
  };
}

function GlassButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <LiquidGlass borderRadius={50} className="block" scale={30} blur={2}>
      <button
        onClick={onClick}
        className="text-wedding-text bg-wedding-pink/25 border-wedding-pink/30 w-full rounded-full border px-6 py-3 text-sm font-semibold"
      >
        {children}
      </button>
    </LiquidGlass>
  );
}

export function VenueSection({
  date,
  time,
  venueName,
  venueHall,
  venueRoadAddress,
  lat,
  lng,
  transport,
}: VenueSectionProps) {
  const handleOpenNaverMap = () => {
    const naverMapUrl = `https://map.naver.com/p/search/${encodeURIComponent(venueName)}?c=${lng},${lat},15,0,0,0,dh`;
    window.open(naverMapUrl, '_blank');
  };

  const handleOpenKakaoMap = () => {
    const kakaoMapUrl = `https://map.kakao.com/link/map/${encodeURIComponent(venueName)},${lat},${lng}`;
    window.open(kakaoMapUrl, '_blank');
  };

  return (
    <Section id="venue" className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        <motion.h2
          className="text-wedding-text mb-10 text-center text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          예식 안내
        </motion.h2>

        {/* 예식 정보 카드 - 리퀴드 글래스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="space-y-4 text-center">
            <div>
              <p className="text-wedding-text text-lg">
                {date}
                <br />
                {time}
              </p>
            </div>
            <div className="bg-wedding-pink/30 mx-auto h-3 w-[2px] rounded-full" />
            <div>
              <p className="text-wedding-text mb-3 text-lg">
                {venueName}
                <br />
                {venueHall}
              </p>
              <p className="text-wedding-text-muted mt-1 text-sm">{venueRoadAddress}</p>
            </div>
            <div className="bg-wedding-pink/30 mx-auto h-3 w-[2px] rounded-full" />
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="border-wedding-pink/50 overflow-hidden rounded-xl border-1">
                <NaverMap lat={lat} lng={lng} className="h-64 w-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <GlassButton onClick={handleOpenKakaoMap}>카카오맵</GlassButton>
          <GlassButton onClick={handleOpenNaverMap}>네이버지도</GlassButton>
        </motion.div>

        {/* 교통 안내 - 리퀴드 글래스 */}
        {transport && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <LiquidGlass className="mt-6" scale={30} blur={2}>
              <div className="px-5 py-6">
                <div className="space-y-3 text-sm font-medium">
                  <div className="flex gap-3">
                    <span className="text-wedding-text min-w-[50px] shrink-0"> 주차장</span>
                    <span className="text-wedding-text-muted font-normal">{transport.car}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-wedding-text min-w-[50px] shrink-0">대중교통</span>
                    <span className="text-wedding-text-muted font-normal">{transport.subway}</span>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </motion.div>
        )}
      </div>
    </Section>
  );
}
