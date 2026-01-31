'use client';

import { useId, type ReactNode, type CSSProperties } from 'react';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** 왜곡 강도 (기본: 40) */
  scale?: number;
  /** 블러 강도 (기본: 2) */
  blur?: number;
  /** 테두리 radius (기본: 24) */
  borderRadius?: number;
}

export function LiquidGlass({
  children,
  className = '',
  style,
  scale = 10,
  blur = 1,
  borderRadius = 16,
}: LiquidGlassProps) {
  const id = useId();
  const filterId = `liquid-glass-${id.replace(/:/g, '')}`;

  return (
    <>
      {/* SVG 필터 정의 */}
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.02"
            numOctaves={2}
            seed={5}
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* 글래스 카드 */}
      <div
        className={`liquid-glass-card ${className}`}
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: `${borderRadius}px`,
          ...style,
        }}
      >
        {/* 굴절 효과 레이어 */}
        <div
          className="liquid-glass-morph"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            filter: `url(#${filterId})`,
            borderRadius: 'inherit',
          }}
        />

        {/* 외부 그림자 */}
        <div
          className="liquid-glass-corner"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />

        {/* 내부 테두리 */}
        <div
          className="liquid-glass-border"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            boxShadow:
              'inset 2px 2px 6px 0 rgba(255, 255, 255, 0.6), inset -0px -0px 0px 0 rgba(232, 180, 184, 0.3), inset 0 0 0 1px rgba(232, 180, 184, 0.2)',
            borderRadius: 'inherit',
            pointerEvents: 'none',
          }}
        />

        {/* 콘텐츠 */}
        <div
          className="liquid-glass-content"
          style={{
            position: 'relative',
            zIndex: 3,
            borderRadius: 'inherit',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
