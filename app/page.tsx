import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <main className="flex min-h-screen flex-col place-content-center space-y-6">
        <section className="flex cursor-pointer flex-col space-y-4 rounded-md bg-white p-10 text-center shadow-sm transition hover:shadow-md">
          <h1 className="text-6xl font-extrabold text-cyan-800">
            Welcome to <a href="https://nextjs.org">Next.js 13!</a>
          </h1>

          <p className=" text-xl text-cyan-600">
            Getting Hands on with NextJs v13.
          </p>
        </section>
        <div className="flex justify-center">
          <Link href="/blog">
            <button className="rounded bg-slate-200 px-4 py-2 text-center">
              Go to Blog
            </button>
          </Link>
        </div>

        {/* test screens */}
      </main>
    </div>
  );
}
