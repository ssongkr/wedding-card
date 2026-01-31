'use client';

import { HeroSection } from '@/components/sections/hero/HeroSection';
import { VenueSection } from '@/components/sections/venue/VenueSection';
import { GallerySection } from '@/components/sections/gallery/GallerySection';
import { AccountSection } from '@/components/sections/account/AccountSection';
import { GlobalParallaxBackground } from '@/components/GlobalParallaxBackground';
import { weddingInfo, transportInfo } from '@/constants/weddingData';

export default function Home() {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];
    return `${year}년 ${month}월 ${day}일 ${weekday}요일`;
  };

  return (
    <main className="relative">
      {/* 전체 페이지 패럴랙스 배경 */}
      <GlobalParallaxBackground />

      {/* 콘텐츠 */}
      <div className="relative z-10">
        {/* 메인 표지 */}
        <HeroSection
          groomName={weddingInfo.groom.name}
          brideName={weddingInfo.bride.name}
          weddingDate={weddingInfo.date}
          weddingTime={weddingInfo.time}
          mainImage="/images/1.jpg"
        />

        {/* 예식 안내 */}
        <VenueSection
          date={formatDate(weddingInfo.date)}
          time={weddingInfo.time}
          venueName={weddingInfo.venue.name}
          venueHall={weddingInfo.venue.hall}
          venueAddress={weddingInfo.venue.address}
          venuePhone={weddingInfo.venue.phone}
          mapUrl={weddingInfo.venue.mapUrl}
          transport={transportInfo}
        />

        {/* 갤러리 */}
        <GallerySection
          images={weddingInfo.gallery}
          groomName={weddingInfo.groom.name}
          brideName={weddingInfo.bride.name}
        />

        {/* 마음 전하기 */}
        <AccountSection
          groomAccounts={weddingInfo.accounts?.groom}
          brideAccounts={weddingInfo.accounts?.bride}
          groomName={weddingInfo.groom.name}
          brideName={weddingInfo.bride.name}
        />
      </div>
    </main>
  );
}
