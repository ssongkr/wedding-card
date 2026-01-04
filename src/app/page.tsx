import Card from '../components/Card';

const CardWrapper = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <div
    className={`flex h-full w-full flex-col items-center justify-center rounded-2xl p-6 text-white shadow-2xl ${className}`}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* 예시 1: 텍스트 중심 카드 */}
        <Card
          className="h-96 w-64"
          front={
            <CardWrapper className="bg-gradient-to-br from-indigo-600 to-blue-500">
              <span className="mb-4 text-5xl">📘</span>
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p className="mt-2 text-center opacity-90">Click to read more details</p>
            </CardWrapper>
          }
          back={
            <CardWrapper className="border-2 border-indigo-600 bg-white p-8 !text-indigo-900">
              <h3 className="mb-4 text-xl font-bold text-indigo-600">Details</h3>
              <ul className="space-y-2 text-left text-sm">
                <li>✅ Fully Customizable</li>
                <li>✅ Anime.js Powered</li>
                <li>✅ Tailwind v4 Styles</li>
              </ul>
            </CardWrapper>
          }
        />

        {/* 예시 2: 이미지 중심 카드 */}
        <Card
          className="h-96 w-64"
          front={
            <div className="group relative h-full w-full overflow-hidden rounded-2xl bg-black">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
                alt="Abstract"
                className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <h2 className="text-2xl font-black tracking-tighter text-white uppercase">Art</h2>
              </div>
            </div>
          }
          back={
            <CardWrapper className="bg-zinc-900">
              <p className="font-serif text-zinc-400 italic">Creativity takes courage.</p>
              <div className="mt-4 h-px w-12 bg-zinc-700" />
              <p className="mt-2 text-sm text-zinc-500">- Henri Matisse</p>
            </CardWrapper>
          }
        />

        {/* 예시 3: 액션 중심 카드 */}
        <Card
          className="h-96 w-64"
          front={
            <CardWrapper className="bg-gradient-to-br from-rose-500 to-orange-400">
              <div className="mb-4 animate-bounce text-6xl">🎁</div>
              <h2 className="text-2xl font-bold">Unbox</h2>
            </CardWrapper>
          }
          back={
            <CardWrapper className="bg-gradient-to-br from-emerald-500 to-teal-400">
              <h2 className="mb-4 text-2xl font-bold">Surprise!</h2>
              <button className="rounded-full bg-white px-6 py-2 text-sm font-bold text-teal-600 shadow-lg transition-colors hover:bg-teal-50">
                Claim Reward
              </button>
            </CardWrapper>
          }
        />
      </div>
    </div>
  );
}
