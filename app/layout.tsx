import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import './global.css';
import { Hanken_Grotesk, IBM_Plex_Mono, Newsreader } from 'next/font/google';
import { appName, siteUrl } from '@/lib/shared';

const body = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-body' });
const display = Newsreader({ subsets: ['latin'], variable: '--font-display', style: ['normal', 'italic'] });
const code = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-code' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: appName, template: `%s | ${appName}` },
  description: 'Guides and answers for Verbolica, the AI marketing platform: setup, strategy, content, publishing, reporting and the WordPress plugin.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${code.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
