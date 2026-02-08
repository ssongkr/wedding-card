import { type WeddingInfo } from '@/types/wedding';

// 샘플 데이터 - 실제 정보로 교체해주세요
export const weddingInfo: WeddingInfo = {
  groom: {
    name: '송가람',
    phone: '010-5343-3642',
    father: '송희연',
    mother: '박경화',
  },
  bride: {
    name: '김진경',
    phone: '010-3125-7231',
    father: '김병옥',
    mother: '이묘숙',
  },
  date: '2026-06-20',
  time: '오후 12시',
  venue: {
    name: '네이버 그린팩토리',
    hall: '커넥트홀 2층',
    address: '성남시 분당구 정자동 178-1',
    roadAddress: '경기도 성남시 분당구 불정로 6',
    phone: '02-1234-5678',
    mapUrl: 'https://map.kakao.com/',
    coordinates: {
      lat: 37.3595,
      lng: 127.1052,
    },
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
        bank: '카카오뱅크',
        accountNumber: '3333-01-9349837',
        holder: '송가람',
        relation: '신랑',
      },
    ],
    bride: [
      {
        bank: '토스뱅크',
        accountNumber: '1000-1697-3399',
        holder: '김진경',
        relation: '신부',
      },
    ],
  },
};

export const transportInfo = {
  subway: '정자역 3번 출구 2번 버스 탑승 (도보 15분)',
  car: '그린팩토리 지하 주차장 (무료)',
  bus: '',
};
