import { ReactNode, ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps extends ComponentProps<typeof motion.section> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ children, className, delay = 0, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={cn("w-full py-16 px-6 md:px-12 max-w-lg mx-auto", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
