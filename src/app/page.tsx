'use client';

import { SpringSection } from '@/components/sections/spring/SpringSection';
import { SummerSection } from '@/components/sections/summer/SummerSection';
import { AutumnSection } from '@/components/sections/autumn/AutumnSection';
import { WinterSection } from '@/components/sections/winter/WinterSection';
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
        {/* 봄 - 메인 */}
        <SpringSection
          groomName={weddingInfo.groom.name}
          brideName={weddingInfo.bride.name}
          weddingDate={weddingInfo.date}
          weddingTime={weddingInfo.time}
          mainImage="/images/1.jpg"
        />

        {/* 여름 - 예식 정보 */}
        <SummerSection
          date={formatDate(weddingInfo.date)}
          time={weddingInfo.time}
          venueName={weddingInfo.venue.name}
          venueHall={weddingInfo.venue.hall}
          venueAddress={weddingInfo.venue.address}
          venuePhone={weddingInfo.venue.phone}
          mapUrl={weddingInfo.venue.mapUrl}
          transport={transportInfo}
        />

        {/* 가을 - 갤러리 */}
        <AutumnSection
          images={weddingInfo.gallery}
          groomName={weddingInfo.groom.name}
          brideName={weddingInfo.bride.name}
        />

        {/* 겨울 - 계좌 정보 */}
        <WinterSection
          groomAccounts={weddingInfo.accounts?.groom}
          brideAccounts={weddingInfo.accounts?.bride}
          groomName={weddingInfo.groom.name}
          brideName={weddingInfo.bride.name}
        />
      </div>
    </main>
  );
}
