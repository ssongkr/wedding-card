'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { type AccountInfo } from '@/types/wedding';
import { useState } from 'react';

interface AccountSectionProps {
  groomAccounts?: AccountInfo[];
  brideAccounts?: AccountInfo[];
  groomName?: string;
  brideName?: string;
}

function AccountCard({ accounts, title }: { accounts: AccountInfo[]; title: string }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (account: AccountInfo, index: number) => {
    try {
      await navigator.clipboard.writeText(account.accountNumber);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      alert('복사에 실패했습니다.');
    }
  };

  if (accounts.length === 0) return null;

  return (
    <div className="space-y-3">
      <h4 className="text-wedding-text-muted text-center text-sm">{title}</h4>
      {accounts.map((account, idx) => (
        <motion.div
          key={idx}
          className="flex items-center justify-between rounded-xl bg-white/70 p-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="text-sm">
            <p className="text-wedding-text-muted text-xs">
              {account.bank} · {account.holder}
              {account.relation && ` (${account.relation})`}
            </p>
            <p className="text-wedding-text mt-1 font-medium">{account.accountNumber}</p>
          </div>
          <button
            onClick={() => handleCopy(account, idx)}
            className="bg-wedding-pink/20 text-wedding-text hover:bg-wedding-pink/30 ml-3 rounded-full px-4 py-2 text-xs transition-colors"
          >
            {copiedIndex === idx ? '복사됨!' : '복사'}
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export function AccountSection({
  groomAccounts = [],
  brideAccounts = [],
  groomName = '신랑',
  brideName = '신부',
}: AccountSectionProps) {
  const [activeTab, setActiveTab] = useState<'groom' | 'bride'>('groom');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${groomName} ♥ ${brideName} 결혼합니다`,
          text: '두 사람의 새로운 시작에 함께해 주세요',
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 복사되었습니다.');
      } catch {
        alert('공유에 실패했습니다.');
      }
    }
  };

  const hasAccounts = groomAccounts.length > 0 || brideAccounts.length > 0;

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

        {hasAccounts && (
          <motion.div
            className="soft-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* 탭 버튼 */}
            <div className="mb-6 flex gap-2">
              <button
                onClick={() => setActiveTab('groom')}
                className={`flex-1 rounded-full py-2.5 text-sm transition-all ${
                  activeTab === 'groom'
                    ? 'bg-wedding-pink/30 text-wedding-text font-medium'
                    : 'text-wedding-text-muted hover:text-wedding-text'
                }`}
              >
                신랑측
              </button>
              <button
                onClick={() => setActiveTab('bride')}
                className={`flex-1 rounded-full py-2.5 text-sm transition-all ${
                  activeTab === 'bride'
                    ? 'bg-wedding-pink/30 text-wedding-text font-medium'
                    : 'text-wedding-text-muted hover:text-wedding-text'
                }`}
              >
                신부측
              </button>
            </div>

            {/* 계좌 목록 */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'groom' ? -10 : 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === 'groom' ? (
                <AccountCard accounts={groomAccounts} title={`${groomName}측 계좌`} />
              ) : (
                <AccountCard accounts={brideAccounts} title={`${brideName}측 계좌`} />
              )}
            </motion.div>
          </motion.div>
        )}

        {/* 공유 버튼 */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button onClick={handleShare} className="soft-button">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              청첩장 공유하기
            </span>
          </button>
        </motion.div>

        {/* 푸터 */}
        <motion.footer
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-wedding-pink mb-2 text-xs tracking-widest">THANK YOU</p>
          <p className="text-wedding-text-muted">
            {groomName} & {brideName}
          </p>
        </motion.footer>
      </div>
    </Section>
  );
}
