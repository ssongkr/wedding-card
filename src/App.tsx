import { useState, useRef, useEffect } from 'react';
import { 
  Heart, MapPin, Copy, ArrowRight,
  Home, Users, Image as ImageIcon, Map as MapIcon, CreditCard
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Layout } from './components/layout/Layout';
import { Button } from './components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./components/ui/dialog";

// 탭 정의
const TABS = [
  { id: 'home', label: 'home', icon: Home },
  { id: 'invite', label: 'invite', icon: Users },
  { id: 'gallery', label: 'gallery', icon: ImageIcon },
  { id: 'location', label: 'location', icon: MapIcon },
  { id: 'account', label: 'gift', icon: CreditCard },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [_copyStatus, setCopyStatus] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(text);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  // 탭 변경 시 해당 메뉴 아이템으로 스크롤
  useEffect(() => {
    if (navRef.current) {
      const activeItem = navRef.current.children[activeTab] as HTMLElement;
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <header className="flex-none h-16 flex items-center justify-between px-6 pt-4 bg-white z-20 shadow-sm relative">
        <span className="font-black text-xl tracking-tight text-stone-900">
          WEDDING<span className="text-rose-500">.</span>
        </span>
        <span className="text-xs font-bold text-stone-400 tracking-widest uppercase">
          {TABS[activeTab].label}
        </span>
      </header>

      {/* Main Content Area - Swiper */}
      <div className="flex-1 relative overflow-hidden bg-stone-50">
        <Swiper
          modules={[EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          onSwiper={setSwiperRef}
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
          className="h-full w-full"
        >
            {/* HOME TAB */}
            <SwiperSlide className="h-full overflow-y-auto no-scrollbar bg-white">
              <div className="min-h-full flex flex-col justify-center items-center text-center p-6 space-y-8">
                <div className="relative">
                  <div className="w-60 h-80 bg-stone-200 rounded-3xl overflow-hidden shadow-xl mb-4 border-4 border-white flex items-center justify-center text-stone-400">
                    Main Photo
                  </div>
                  <div className="absolute -right-4 -bottom-4 bg-rose-500 text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg rotate-12">
                    <span className="text-xs font-bold">DEC</span>
                    <span className="text-3xl font-bold leading-none">25</span>
                    <span className="text-xs">SAT 1PM</span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-black text-stone-800 tracking-tighter mb-2">
                    KIM & LEE
                  </h1>
                  <p className="text-stone-500 font-medium">WE ARE GETTING MARRIED</p>
                </div>
                <Button 
                  className="rounded-full w-full max-w-xs bg-stone-900 h-12 text-lg"
                  onClick={() => handleTabClick(1)}
                >
                  청첩장 열기 <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </SwiperSlide>

            {/* INVITE TAB */}
            <SwiperSlide className="h-full overflow-y-auto no-scrollbar bg-white">
              <div className="min-h-full flex flex-col justify-center p-8 text-left">
                <h2 className="text-5xl font-black text-stone-100 mb-8 absolute top-8 right-8 -z-10 select-none">INVITE</h2>
                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-1 bg-rose-500 mb-6" />
                  <h3 className="text-2xl font-bold text-stone-800">
                    소중한 분들을<br/>초대합니다
                  </h3>
                  <p className="text-stone-600 leading-loose">
                    평생을 같이하고 싶은 사람을 만났습니다.<br/>
                    서로 아껴주고 이해하며<br/>
                    사랑 베풀며 살고 싶습니다.<br/>
                    <br/>
                    저희 약속 위에 따뜻한 격려로<br/>
                    축복해 주셔서 힘찬 출발의<br/>
                    디딤돌이 되어 주십시오.
                  </p>
                  
                  <div className="pt-8 border-t border-stone-100 mt-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-stone-800">김철수</span>
                      <span className="text-sm text-stone-500">김아버지 · 박어머니의 장남</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-stone-800">이영희</span>
                      <span className="text-sm text-stone-500">이아버지 · 최어머니의 차녀</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* GALLERY TAB */}
            <SwiperSlide className="h-full overflow-y-auto no-scrollbar bg-white">
              <div className="min-h-full p-6 pb-24">
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Dialog key={i}>
                      <DialogTrigger asChild>
                        <div 
                          className="w-full bg-stone-200 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          style={{ height: i % 3 === 0 ? '200px' : '150px' }}
                        >
                          <div className="w-full h-full flex items-center justify-center text-stone-400 bg-stone-100">
                            Img {i}
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-[90vw] bg-transparent border-none shadow-none p-0">
                         <div className="w-full h-[60vh] bg-stone-200 rounded-lg flex items-center justify-center">Full Image {i}</div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            {/* LOCATION TAB */}
            <SwiperSlide className="h-full overflow-y-auto no-scrollbar bg-stone-100">
              <div className="min-h-full flex flex-col p-0">
                <div className="flex-1 bg-stone-200 relative min-h-[50%]">
                   <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                     <MapPin className="w-12 h-12 opacity-20 mb-2" />
                   </div>
                </div>
                <div className="bg-white p-8 rounded-t-3xl shadow-lg -mt-6 z-10 pb-12">
                   <h3 className="text-2xl font-bold text-stone-800 mb-2">아모리스 웨딩홀</h3>
                   <p className="text-stone-500 mb-6">서울 강남구 강남대로 123</p>
                   
                   <div className="grid grid-cols-2 gap-3 mb-6">
                     <Button variant="outline" className="h-12 border-stone-200">네이버 지도</Button>
                     <Button variant="outline" className="h-12 border-stone-200">카카오맵</Button>
                   </div>
                   
                   <div className="space-y-4 text-sm text-stone-600 bg-stone-50 p-4 rounded-xl">
                     <div className="flex gap-3">
                       <div className="font-bold min-w-12 text-stone-800">지하철</div>
                       <div>2호선 강남역 1번 출구 도보 5분</div>
                     </div>
                     <div className="flex gap-3">
                       <div className="font-bold min-w-12 text-stone-800">버스</div>
                       <div>강남역 사거리 하차</div>
                     </div>
                   </div>
                </div>
              </div>
            </SwiperSlide>

            {/* GIFT TAB */}
            <SwiperSlide className="h-full overflow-y-auto no-scrollbar bg-white">
              <div className="min-h-full flex flex-col justify-center p-8">
                <h2 className="text-3xl font-bold text-stone-800 mb-2">마음 전하실 곳</h2>
                <p className="text-stone-500 mb-8">따뜻한 마음 감사히 받겠습니다.</p>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="groom" className="border border-stone-200 rounded-xl px-2 shadow-sm">
                    <AccordionTrigger className="hover:no-underline px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                          <Users className="w-4 h-4" />
                        </div>
                        <span>신랑측 계좌</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 pt-2">
                      <div className="bg-stone-50 p-4 rounded-lg space-y-3">
                        <div className="flex justify-between items-end">
                          <div>
                            <span className="text-xs text-stone-400 block mb-1">국민은행</span>
                            <span className="font-mono font-medium text-lg text-stone-700">123-4567-890</span>
                          </div>
                          <Button size="icon" variant="ghost" onClick={() => handleCopy("123-4567-890")}>
                            <Copy className="w-4 h-4 text-stone-400" />
                          </Button>
                        </div>
                        <div className="text-sm text-stone-500">예금주: 김철수</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="bride" className="border border-stone-200 rounded-xl px-2 shadow-sm">
                    <AccordionTrigger className="hover:no-underline px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                          <Heart className="w-4 h-4" />
                        </div>
                        <span>신부측 계좌</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 pt-2">
                       <div className="bg-stone-50 p-4 rounded-lg space-y-3">
                        <div className="flex justify-between items-end">
                          <div>
                            <span className="text-xs text-stone-400 block mb-1">신한은행</span>
                            <span className="font-mono font-medium text-lg text-stone-700">999-888-7777</span>
                          </div>
                          <Button size="icon" variant="ghost" onClick={() => handleCopy("999-888-7777")}>
                            <Copy className="w-4 h-4 text-stone-400" />
                          </Button>
                        </div>
                        <div className="text-sm text-stone-500">예금주: 이영희</div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>

      {/* Text-Based Bottom Navigation */}
      <nav 
        ref={navRef}
        className="flex-none h-24 bg-white flex items-center overflow-x-auto no-scrollbar px-6 gap-6 select-none shadow-inner"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {TABS.map((tab, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(index)}
              className="flex-none transition-all duration-300 focus:outline-none snap-center"
            >
              <span className={`block transition-all duration-300 ${
                isActive 
                  ? 'text-4xl font-black text-stone-900 tracking-tight' 
                  : 'text-2xl font-bold text-stone-300 hover:text-stone-400'
              }`}>
                {tab.label}
              </span>
            </button>
          )
        })}
        {/* Padding for end of list */}
        <div className="w-6 flex-none" /> 
      </nav>
    </Layout>
  );
}

export default App;