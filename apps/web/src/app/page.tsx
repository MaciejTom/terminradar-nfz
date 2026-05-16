export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 text-zinc-950">
      <main className="w-full max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          TerminRadar NFZ
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal">
          Frontend scaffold is ready.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600">
          This Next.js app will become the user interface for searching and
          monitoring public NFZ treatment queue data.
        </p>
      </main>
    </div>
  );
}
