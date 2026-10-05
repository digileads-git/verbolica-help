import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appUrl } from './shared';

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src="/verbolica-icon-ink.png" alt="" width={22} height={22} className="dark:hidden" />
      <Image src="/verbolica-icon-paper.png" alt="" width={22} height={22} className="hidden dark:block" />
      <span className="font-display text-lg leading-none">verbolica</span>
      <span className="text-fd-muted-foreground text-sm font-normal">help</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: '/',
    },
    links: [
      { text: 'Guides', url: '/docs', active: 'nested-url' },
      { text: 'Log in', url: appUrl, external: true },
    ],
  };
}
