import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-200 dark:from-black dark:to-zinc-900 text-center px-4">
      
      <h1 className="text-7xl font-extrabold tracking-tight text-zinc-800 dark:text-white">
        404
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-6 py-3 text-white text-sm font-medium hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        ← Back to Home
      </Link>
    </div>
  );
}