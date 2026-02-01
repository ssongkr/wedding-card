'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';

interface PersonIntro {
  name: string;
  fatherName: string;
  motherName: string;
  birthOrder: string; // 장남, 차남, 장녀, 차녀 등
  childhoodPhoto?: string;
}

interface GallerySectionProps {
  groom: PersonIntro;
  bride: PersonIntro;
  galleryImages?: string[];
}

export function GallerySection({ groom, bride, galleryImages = [] }: GallerySectionProps) {
  return (
    <Section id="gallery" className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        <motion.h2
          className="text-wedding-text mb-10 text-center text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          우리의 이야기
        </motion.h2>

        {/* 신랑 소개 - 설명 왼쪽, 사진 오른쪽 */}
        {groom.childhoodPhoto && (
          <motion.div
            className="flex items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="text-right">
              <p className="text-wedding-text/60 text-xs">
                {groom.fatherName} · {groom.motherName}의 {groom.birthOrder}
              </p>
              <p className="text-wedding-text mt-1 text-sm font-medium">{groom.name}</p>
            </div>
            <motion.div
              className="shrink-0 rounded-sm bg-[#fffaf8] p-1.5 pb-3"
              style={{
                boxShadow: '0 3px 10px rgba(180, 140, 140, 0.2), 0 1px 3px rgba(0, 0, 0, 0.06)',
              }}
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-20 w-20 overflow-hidden">
                <img
                  src={groom.childhoodPhoto}
                  alt={`${groom.name} 어릴적`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 신부 소개 - 사진 왼쪽, 설명 오른쪽 */}
        {bride.childhoodPhoto && (
          <motion.div
            className="mt-6 flex items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              className="shrink-0 rounded-sm bg-[#fffaf8] p-1.5 pb-3"
              style={{
                boxShadow: '0 3px 10px rgba(180, 140, 140, 0.2), 0 1px 3px rgba(0, 0, 0, 0.06)',
              }}
              initial={{ rotate: 0 }}
              whileInView={{ rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-20 w-20 overflow-hidden">
                <img
                  src={bride.childhoodPhoto}
                  alt={`${bride.name} 어릴적`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
            <div className="text-left">
              <p className="text-wedding-text/60 text-xs">
                {bride.fatherName} · {bride.motherName}의 {bride.birthOrder}
              </p>
              <p className="text-wedding-text mt-1 text-sm font-medium">{bride.name}</p>
            </div>
          </motion.div>
        )}

        <div className="bg-wedding-pink/30 mx-auto mt-10 h-3 w-[2px] rounded-full" />

        {/* 갤러리 - 폴라로이드 스타일 */}
        {galleryImages.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-5">
            {galleryImages.map((image, idx) => {
              const isLarge = idx === 0 || idx === 3;
              const rotations = [-2, 1.5, -1, 2, -1.5, 1];
              const rotation = rotations[idx % rotations.length];
              return (
                <motion.div
                  key={idx}
                  className={isLarge ? 'col-span-2 flex justify-center' : ''}
                  initial={{ opacity: 0, y: 30, scale: 0.95, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: rotation }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: 'easeOut',
                  }}
                >
                  <div
                    className={`rounded-sm bg-[#fffaf8] p-2 pb-4 ${isLarge ? 'w-3/4' : 'w-full'}`}
                    style={{
                      boxShadow:
                        '0 4px 12px rgba(180, 140, 140, 0.25), 0 2px 4px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <div className={isLarge ? 'aspect-[4/3]' : 'aspect-square'}>
                      <img
                        src={image}
                        alt={`갤러리 ${idx + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}
