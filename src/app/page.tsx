import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 font-[family-name:var(--font-geist-sans)] text-gray-900">
      <div className="w-full max-w-sm space-y-8 text-center">
        <header className="space-y-2">
          <h1 className="font-serif text-4xl text-amber-800">Wedding Invitation</h1>
          <p className="text-xl font-light tracking-widest text-gray-600">신랑 OOO & 신부 OOO</p>
        </header>

        <section className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center bg-amber-100 text-amber-900 italic">
            여기에 메인 사진을 넣으세요
          </div>
        </section>

        <section className="space-y-4 border-y border-amber-200 py-8">
          <p className="leading-relaxed">
            서로가 마주 보며 다진 약속을
            <br />
            함께 걷는 걸음으로 지켜나가겠습니다.
            <br />
            저희의 시작을 축복해 주세요.
          </p>
          <div className="pt-4 text-sm text-gray-500">
            <p>2026년 10월 24일 토요일 오후 12시</p>
            <p>행복예식장 1층 그랜드볼룸</p>
          </div>
        </section>
      </div>
    </main>
  );
}
