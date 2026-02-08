'use client';

import { HeroSection } from '@/components/sections/hero/HeroSection';
import { VenueSection } from '@/components/sections/venue/VenueSection';
import { GallerySection } from '@/components/sections/gallery/GallerySection';
import { AccountSection } from '@/components/sections/account/AccountSection';
import { GlobalParallaxBackground } from '@/components/GlobalParallaxBackground';
import { SectionDivider } from '@/components/ui/SectionDivider';
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

        <SectionDivider />

        {/* 예식 안내 */}
        <VenueSection
          date={formatDate(weddingInfo.date)}
          time={weddingInfo.time}
          venueName={weddingInfo.venue.name}
          venueHall={weddingInfo.venue.hall}
          venueAddress={weddingInfo.venue.address}
          venueRoadAddress={weddingInfo.venue.roadAddress}
          venuePhone={weddingInfo.venue.phone}
          mapUrl={weddingInfo.venue.mapUrl}
          lat={weddingInfo.venue.coordinates?.lat ?? 37.5665}
          lng={weddingInfo.venue.coordinates?.lng ?? 126.978}
          transport={transportInfo}
        />

        <SectionDivider />

        {/* 갤러리 */}
        <GallerySection
          groom={{
            name: weddingInfo.groom.name,
            fatherName: weddingInfo.groom.father || '',
            motherName: weddingInfo.groom.mother || '',
            birthOrder: '차남',
            childhoodPhoto: '/images/2.jpg',
          }}
          bride={{
            name: weddingInfo.bride.name,
            fatherName: weddingInfo.bride.father || '',
            motherName: weddingInfo.bride.mother || '',
            birthOrder: '차녀',
            childhoodPhoto: '/images/3.jpg',
          }}
          galleryImages={weddingInfo.gallery?.slice(0, 3)}
        />

        <SectionDivider />

        {/* 마음 전하기 */}
        <AccountSection
          groomName={weddingInfo.groom.name}
          brideName={weddingInfo.bride.name}
          groomContact={{
            name: weddingInfo.groom.name,
            phone: weddingInfo.groom.phone,
            relation: '신랑',
          }}
          brideContact={{
            name: weddingInfo.bride.name,
            phone: weddingInfo.bride.phone,
            relation: '신부',
          }}
          groomAccounts={weddingInfo.accounts?.groom}
          brideAccounts={weddingInfo.accounts?.bride}
        />
      </div>
    </main>
  );
}
