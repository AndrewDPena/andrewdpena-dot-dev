import { SiteNav } from "@/components/SiteNav";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-semibold">
          Andrew Peña
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
