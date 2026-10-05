import Link from 'next/link';
import {
  BarChart3,
  CircleCheck,
  Coins,
  Handshake,
  MessagesSquare,
  PenLine,
  Plug,
  Rocket,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { SearchButton } from '@/components/search-button';

type Topic = { title: string; description: string; href: string; icon: LucideIcon };

const topics: Topic[] = [
  {
    title: 'Getting started',
    description: 'What Verbolica does, setting up a brand, and who can do what.',
    href: '/docs/getting-started/what-is-verbolica',
    icon: Rocket,
  },
  {
    title: 'Connections',
    description: 'The WordPress plugin, Google Search Console and Analytics, and social accounts.',
    href: '/docs/connections/wordpress-plugin',
    icon: Plug,
  },
  {
    title: 'Content',
    description: 'Campaigns, drafts, Decisions, lead magnets, email and the website builder.',
    href: '/docs/content/campaigns-and-channels',
    icon: PenLine,
  },
  {
    title: 'Approvals and publishing',
    description: 'Getting sign-off, scheduling, and publishing to the website and social.',
    href: '/docs/content/approvals',
    icon: CircleCheck,
  },
  {
    title: 'The Strategist and AI agent',
    description: 'Ask in plain English, an AI agent clients can email, recommendations and automation.',
    href: '/docs/strategist/chat',
    icon: MessagesSquare,
  },
  {
    title: 'Reports and performance',
    description: 'Monthly reports, rankings, insights and AI visibility.',
    href: '/docs/reports/monthly-reports',
    icon: BarChart3,
  },
  {
    title: 'Account and credits',
    description: 'Credits, your team, workspaces and notifications.',
    href: '/docs/account/credits',
    icon: Coins,
  },
  {
    title: 'For clients',
    description: 'Reviewing work, approving it, and following results.',
    href: '/docs/for-clients/client-guide',
    icon: Handshake,
  },
  {
    title: 'Troubleshooting',
    description: 'Publishing problems and missing data.',
    href: '/docs/troubleshooting/wordpress-publishing-problems',
    icon: Wrench,
  },
];

const popular = [
  { title: 'Install the WordPress plugin', href: '/docs/connections/wordpress-plugin' },
  { title: 'Connect Google Search Console and Analytics', href: '/docs/connections/google-search-console-and-analytics' },
  { title: 'How approvals work', href: '/docs/content/approvals' },
  { title: 'How credits work', href: '/docs/account/credits' },
  { title: 'Fix a firewall blocking Verbolica', href: '/docs/troubleshooting/wordpress-publishing-problems#a-firewall-is-blocking-verbolica' },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-14 md:py-20">
      <section className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-fd-muted-foreground">Verbolica Help</p>
        <h1 className="text-4xl leading-tight md:text-5xl">
          How can we <em>help?</em>
        </h1>
        <p className="mt-4 text-lg text-fd-muted-foreground">
          Guides for agencies, their clients, and anyone connecting a website to Verbolica.
        </p>
        <div className="mt-8">
          <SearchButton />
        </div>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map(({ title, description, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-[14px] border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-ring"
          >
            <Icon className="mb-3 size-5 text-fd-primary" strokeWidth={1.75} />
            <h2 className="text-xl">{title}</h2>
            <p className="mt-1 text-sm text-fd-muted-foreground">{description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl">Popular guides</h2>
          <ul className="divide-y divide-fd-border border-y border-fd-border">
            {popular.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 hover:text-fd-primary">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[20px] bg-fd-secondary p-6">
          <h2 className="text-2xl">Still stuck?</h2>
          <p className="mt-2 text-fd-muted-foreground">
            Ask the Strategist inside Verbolica. It knows every feature and can often do the task for you. Or contact
            your account manager.
          </p>
          <a
            href="https://app.verbolica.com"
            className="mt-5 inline-flex items-center rounded-[10px] bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-transform active:translate-y-px"
          >
            Open Verbolica
          </a>
        </div>
      </section>
    </main>
  );
}
