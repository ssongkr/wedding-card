'use client';

import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen px-6 py-16 ${className}`}>
      {children}
    </section>
  );
}
