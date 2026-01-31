'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

// 벚꽃잎 SVG 컴포넌트 - 끝이 살짝 휜 벚꽃잎
function PetalSvg({ size, color }: { size: number; color: string }) {
  const strokeColor = color.replace(/[\d.]+\)$/, '1.0)');

  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 24 28">
      {/* 벚꽃잎: 위쪽 홈, 아래 끝이 살짝 휨 */}
      <path
        d="M12 26
           Q4 19 3 12
           Q2 5 7 1
           Q10 0 12 3
           Q14 0 17 1
           Q22 5 21 12
           Q20 19 13 25
           Q12.5 26 11 27"
        fill={color}
        stroke={strokeColor}
        strokeWidth="0.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 물방울 데이터 배열 - 꽃잎과 겹치지 않는 위치, 더 큰 크기
const droplets = [
  { top: '-15%', left: '-10%', size: 280, color: 'rgba(248, 180, 184, 0.12)' },
  { top: '75vh', right: '-5%', size: 110, color: 'rgba(255, 192, 203, 0.11)' },
  { top: '105vh', left: '-10%', size: 180, color: 'rgba(201, 168, 108, 0.1)' },
];

const petals = [
  {
    top: '40vh',
    left: '85%',
    size: 20,
    color: 'rgba(255, 192, 203, 0.32)',
    rotateGroup: 1,
    initialRotate: -10,
  },
  {
    top: '55vh',
    left: '8%',
    size: 24,
    color: 'rgba(252, 213, 216, 0.25)',
    rotateGroup: 2,
    initialRotate: 30,
  },
  {
    top: '85vh',
    left: '25%',
    size: 21,
    color: 'rgba(255, 182, 193, 0.28)',
    rotateGroup: 1,
    initialRotate: 50,
  },
  {
    top: '120vh',
    left: '80%',
    size: 18,
    color: 'rgba(255, 192, 203, 0.3)',
    rotateGroup: 1,
    initialRotate: -30,
  },
];

export function GlobalParallaxBackground() {
  const { scrollYProgress } = useScroll();

  // 물방울: 가장 느리게 (스크롤의 8% 속도) - 멀리 있는 느낌
  const dropletY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  // 꽃잎: 조금 더 빠르게 (스크롤의 18% 속도) - 가까이 있는 느낌
  const petalY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);

  // 꽃잎 회전 그룹별 다른 회전값 (Z축)
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // 플립 효과 (X축 회전만) - 스크롤 기반
  const flipX1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 45, -30, 50, 0]);
  const flipX2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -40, 35, -45, 0]);
  const flipX3 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 50, -40, 35, 0]);

  const getRotateZ = (group: number) => {
    if (group === 1) return rotate1;
    if (group === 2) return rotate2;
    return rotate3;
  };

  const getFlipX = (group: number) => {
    if (group === 1) return flipX1;
    if (group === 2) return flipX2;
    return flipX3;
  };

  return (
    <div
      className="pointer-events-none fixed z-0 h-lvh w-full overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* 물방울들 - 느리게 */}
      <motion.div className="absolute inset-0" style={{ y: dropletY }}>
        {droplets.map((droplet, index) => {
          const borderColor = droplet.color.replace(/[\d.]+\)$/, '0.10)');
          return (
            <div
              key={`droplet-${index}`}
              className="absolute rounded-full"
              style={{
                top: droplet.top,
                left: droplet.left,
                right: droplet.right,
                width: droplet.size,
                height: droplet.size,
                background: droplet.color,
                border: `1px solid ${borderColor}`,
              }}
            />
          );
        })}
      </motion.div>

      {/* 꽃잎들 - 조금 더 빠르게 */}
      <motion.div className="absolute inset-0" style={{ y: petalY, transformStyle: 'preserve-3d' }}>
        {petals.map((petal, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: petal.top,
              left: petal.left,
              rotateZ: getRotateZ(petal.rotateGroup),
              rotateX: getFlipX(petal.rotateGroup),
              transformStyle: 'preserve-3d',
            }}
            initial={{ rotate: petal.initialRotate }}
          >
            <PetalSvg size={petal.size} color={petal.color} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
