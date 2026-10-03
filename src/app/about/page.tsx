import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };
export default function About() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          About
        </h1>

        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
          Coming Soon
        </p>
      </div>
    </main>
  );
}
