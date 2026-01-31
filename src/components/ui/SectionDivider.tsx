'use client';

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`flex justify-center${className}`}>
      <div className="from-wedding-pink/60 via-wedding-pink/30 h-12 w-px bg-gradient-to-b to-transparent" />
    </div>
  );
}
