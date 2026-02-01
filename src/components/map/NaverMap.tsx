'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

interface NaverMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}

export function NaverMap({ lat, lng, zoom = 16, className }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.naver) return;

    const center = new window.naver.maps.LatLng(lat, lng);
    const map = new window.naver.maps.Map(mapRef.current, {
      center,
      zoom,
      draggable: false,
      scrollWheel: false,
      pinchZoom: false,
      disableDoubleTapZoom: true,
      disableDoubleClickZoom: true,
      disableTwoFingerTapZoom: true,
    });

    mapInstanceRef.current = map;

    new window.naver.maps.Marker({
      position: center,
      map,
    });
  }, [isLoaded, lat, lng, zoom]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    mapInstanceRef.current.setOptions({
      draggable: !isLocked,
      scrollWheel: !isLocked,
      pinchZoom: !isLocked,
      disableDoubleTapZoom: isLocked,
      disableDoubleClickZoom: isLocked,
      disableTwoFingerTapZoom: isLocked,
    });
  }, [isLocked]);

  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

  return (
    clientId && (
      <>
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`}
          strategy="afterInteractive"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="relative">
          <div ref={mapRef} className={className} />
          <button
            onClick={() => setIsLocked(!isLocked)}
            className="absolute top-3 right-3 z-[99999] flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-all hover:bg-white"
            aria-label={isLocked ? '지도 잠금 해제' : '지도 잠금'}
          >
            {isLocked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-wedding-text h-4 w-4"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-wedding-text h-4 w-4"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
              </svg>
            )}
          </button>
        </div>
      </>
    )
  );
}
