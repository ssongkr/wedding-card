import { type WeddingInfo } from '@/types/wedding';

// 샘플 데이터 - 실제 정보로 교체해주세요
export const weddingInfo: WeddingInfo = {
  groom: {
    name: '신랑',
    phone: '010-1234-5678',
    father: '아버지',
    mother: '어머니',
  },
  bride: {
    name: '신부',
    phone: '010-8765-4321',
    father: '아버지',
    mother: '어머니',
  },
  date: '2025-05-10',
  time: '오후 2시',
  venue: {
    name: '예식장 이름',
    hall: '그랜드홀 3층',
    address: '서울시 강남구 테헤란로 123',
    phone: '02-1234-5678',
    mapUrl: 'https://map.kakao.com/',
  },
  message: `서로 다른 길을 걸어온 두 사람이
이제 하나의 길을 함께 걸어가려 합니다.

귀한 걸음 하시어 축복해 주시면
더없는 기쁨으로 간직하겠습니다.`,
  gallery: [
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
  ],
  accounts: {
    groom: [
      {
        bank: '신한은행',
        accountNumber: '110-123-456789',
        holder: '신랑',
        relation: '신랑',
      },
      {
        bank: '국민은행',
        accountNumber: '123-45-6789012',
        holder: '아버지',
        relation: '신랑 부',
      },
    ],
    bride: [
      {
        bank: '우리은행',
        accountNumber: '1002-123-456789',
        holder: '신부',
        relation: '신부',
      },
      {
        bank: '하나은행',
        accountNumber: '123-456789-01234',
        holder: '어머니',
        relation: '신부 모',
      },
    ],
  },
};

export const transportInfo = {
  subway: '2호선 강남역 3번 출구에서 도보 5분',
  bus: '강남역 정류장 하차 (146, 341, 360)',
  car: '지하 주차장 이용 가능 (3시간 무료)',
};
