import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <main className="min-h-screen w-full bg-stone-100 flex justify-center">
      <div className={cn(
        "w-full max-w-md bg-white h-screen shadow-2xl flex flex-col relative overflow-hidden",
        className
      )}>
        {children}
      </div>
    </main>
  );
}
