# 모바일 청첩장 프로젝트 계획 (Mobile Wedding Invitation)

## 🌟 프로젝트 개요
스크롤에 따라 배경과 분위기가 반전되는, 심플하면서도 화려한 애니메이션이 가미된 모바일 청첩장을 제작합니다.

## 🛠 기술 스택
- **Framework:** React + Vite + TypeScript
- **Styling:** Tailwind CSS (반응형 디자인 및 유틸리티 우선 스타일링)
- **Animation:** Framer Motion (스크롤 트리거, 테마 전환, 컴포넌트 애니메이션)
- **Icons:** Lucide-React (심플한 아이콘 세트)
- **Deployment:** GitHub Pages

## 📐 핵심 구현 계획

### 1. 스크롤 기반 테마 시스템
- `Framer Motion`의 `useScroll`과 `useTransform`을 활용하여 스크롤 위치에 따른 배경색 및 텍스트 색상 보간(Interpolation).
- 각 섹션이 뷰포트에 들어올 때마다 상태를 업데이트하여 배경 분위기를 전환.

### 2. 페이지 구성 (Sections)
- **Section 1: Hero (메인)**
  - 메인 사진 및 예식 일시
  - 페이드인/업 애니메이션으로 등장
- **Section 2: Invitation (초대의 글)**
  - 타이핑 효과 또는 스크롤에 따른 텍스트 등장 효과
- **Section 3: Gallery (갤러리)**
  - 이미지 슬라이더 또는 스크롤 기반의 그리드 애니메이션
- **Section 4: Location (오시는 길)**
  - 카카오/네이버 지도 API 연동
  - 길찾기 버튼 및 교통 안내
- **Section 5: Contact & Account (마음 전하실 곳)**
  - 아코디언 메뉴를 활용한 계좌 정보
  - 클립보드 복사 기능

### 3. 디테일 요소
- **Smooth Scroll:** 부드러운 스크롤 경험 제공
- **Open Graph:** 카카오톡/문자 공유 시 표시될 썸네일, 제목, 설명 설정
- **Mobile First:** 모바일 기기에 최적화된 레이아웃 및 터치 인터페이스

## 📅 개발 로드맵
1. **[1단계] 환경 구성:** Vite 프로젝트 생성, Tailwind CSS 및 Framer Motion 설정
2. **[2단계] 구조 설계:** 공통 레이아웃 및 스크롤 핸들러 구현
3. **[3단계] 섹션 개발:** 각 페이지 구성 요소 구현 및 애니메이션 입히기
4. **[4단계] 기능 추가:** 지도 연동 및 복사 기능 등 유틸리티 구현
5. **[5단계] 최적화 및 배포:** 이미지 최적화, OG Tag 설정 후 GitHub Pages 배포
