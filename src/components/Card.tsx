'use client';

import React, { useRef, useState } from 'react';
import { animate } from 'animejs';

interface CardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

const Card = ({ front, back, className = '' }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const handleFlip = async () => {
    if (isAnimating.current || !cardRef.current) return;

    isAnimating.current = true;
    const nextIsFlipped = !isFlipped;

    try {
      await animate(cardRef.current, {
        rotateY: nextIsFlipped ? 180 : 0,
        duration: 700,
        ease: 'inOutCubic',
      });
    } catch (error) {
      console.error('Animation failed', error);
    } finally {
      isAnimating.current = false;
      setIsFlipped(nextIsFlipped);
    }
  };

  return (
    <div className={`perspective-1000 cursor-pointer ${className}`} onClick={handleFlip}>
      <div
        ref={cardRef}
        className="transform-style-3d relative h-full w-full"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Front */}
        <div className="absolute inset-0 h-full w-full backface-hidden">{front}</div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full rotate-y-180 backface-hidden">{back}</div>
      </div>
    </div>
  );
};

export default Card;
