'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { LiquidGlass } from '@/components/ui/LiquidGlass';

interface ContactInfo {
  name: string;
  phone?: string;
  relation: string;
}

interface AccountSectionProps {
  groomName: string;
  brideName: string;
  groomContact: ContactInfo;
  brideContact: ContactInfo;
}

function ContactItem({ contact }: { contact: ContactInfo }) {
  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleSms = (phone: string) => {
    window.open(`sms:${phone}`, '_self');
  };

  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-1.5">
        <span className="text-wedding-pink text-sm font-medium">{contact.relation}</span>
        <span className="bg-wedding-pink/50 h-[2px] w-[2px] rounded-full" />
        <span className="text-wedding-text text-sm font-medium">{contact.name}</span>
      </div>
      {contact.phone && (
        <div className="flex items-center gap-1">
          <motion.button
            onClick={() => handleCall(contact.phone!)}
            className="text-wedding-text/80 flex h-8 w-8 items-center justify-center rounded-full outline-none select-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            whileTap={{ scale: 0.9, opacity: 0.7 }}
            transition={{ duration: 0.1 }}
            aria-label="전화하기"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => handleSms(contact.phone!)}
            className="text-wedding-text/80 flex h-8 w-8 items-center justify-center rounded-full outline-none select-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            whileTap={{ scale: 0.9, opacity: 0.7 }}
            transition={{ duration: 0.1 }}
            aria-label="문자하기"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
}

function GlassButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <motion.div
      whileTap={{ scale: 0.97, filter: 'brightness(0.95)' }}
      transition={{ duration: 0.1 }}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <LiquidGlass borderRadius={50} className="block" scale={30} blur={2}>
        <button
          onClick={onClick}
          className="text-wedding-text bg-wedding-pink/25 border-wedding-pink/30 w-full rounded-full border px-6 py-3 text-sm font-semibold outline-none select-none"
        >
          {children}
        </button>
      </LiquidGlass>
    </motion.div>
  );
}

export function AccountSection({
  groomName,
  brideName,
  groomContact,
  brideContact,
}: AccountSectionProps) {
  const copyToClipboard = async () => {
    const url = window.location.href;

    try {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch {}
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${groomName} ♥ ${brideName} 결혼합니다`,
          text: '두 사람의 새로운 시작에 함께해 주세요',
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed - fallback to clipboard
        await copyToClipboard();
      }
    } else {
      await copyToClipboard();
    }
  };

  return (
    <Section id="account" className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        <motion.h2
          className="text-wedding-text mb-10 text-center text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          마음 전하실 곳
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <LiquidGlass scale={30} blur={2}>
            <div className="px-5 py-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ContactItem contact={groomContact} />
                <ContactItem contact={brideContact} />
              </motion.div>
            </div>
          </LiquidGlass>
        </motion.div>

        {/* 공유 버튼 */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <GlassButton onClick={handleShare}>청첩장 공유하기</GlassButton>
        </motion.div>

        {/* 푸터 */}
        <motion.footer
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-wedding-pink mb-2 text-base tracking-widest">THANK YOU</p>
          <p className="text-wedding-text/40 text-xs">Designed by Karam</p>
        </motion.footer>
      </div>
    </Section>
  );
}
