'use client';

import { useSearchContext } from 'fumadocs-ui/contexts/search';
import { Search } from 'lucide-react';

export function SearchButton() {
  const { setOpenSearch } = useSearchContext();

  return (
    <button
      type="button"
      onClick={() => setOpenSearch(true)}
      className="flex w-full items-center gap-3 rounded-[10px] border border-fd-border bg-fd-card px-4 py-3 text-left text-fd-muted-foreground shadow-sm transition-colors hover:border-fd-ring"
    >
      <Search className="size-5 shrink-0" strokeWidth={1.75} />
      <span className="flex-1">Search the guides…</span>
      <kbd className="hidden rounded-md border border-fd-border px-1.5 py-0.5 font-mono text-xs sm:inline">⌘ K</kbd>
    </button>
  );
}
