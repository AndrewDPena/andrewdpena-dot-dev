export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl">
        <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
          Under construction
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Andrew Peña
        </h1>

        <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
          Software engineer. Frontend-leaning full-stack.
        </p>

        <p className="mt-8 leading-7 text-zinc-600 dark:text-zinc-400">
          This site is being built in the open: a Next.js app, self-hosted in
          Docker on a Raspberry Pi. Projects you can run live in the browser are
          on the way.
        </p>

        <nav className="mt-10 flex flex-wrap gap-6 text-sm font-medium">
          <a
            href="https://github.com/AndrewDPena"
            className="underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://github.com/AndrewDPena/andrewdpena-dot-dev"
            className="underline-offset-4 hover:underline"
          >
            Source for this site
          </a>
          <a
            href="https://www.linkedin.com/in/andrewdpena"
            className="underline-offset-4 hover:underline"
          >
            Find me on LinkedIn
          </a>
        </nav>
      </div>
    </main>
  );
}
