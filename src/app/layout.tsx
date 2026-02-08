import type { Metadata, Viewport } from 'next';
import { Alex_Brush } from 'next/font/google';
import './globals.css';

const alexBrush = Alex_Brush({
  variable: '--font-alex-brush',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#FDF6F0',
};

const SITE_URL = 'https://ssongkr.github.io/wedding';

export const metadata: Metadata = {
  title: '청첩장 :: 송가람 ♥ 김진경',
  description: '두 사람의 새로운 시작에 함께해 주세요',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: '청첩장 :: 송가람 ♥ 김진경',
    description: '두 사람의 새로운 시작에 함께해 주세요',
    url: SITE_URL,
    siteName: '송가람 ♥ 김진경 결혼식에 초대합니다',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '송가람 ♥ 김진경 모바일 청첩장',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '청첩장 :: 송가람 ♥ 김진경',
    description: '두 사람의 새로운 시작에 함께해 주세요',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${alexBrush.variable} antialiased`}>{children}</body>
    </html>
  );
}
