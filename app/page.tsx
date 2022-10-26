import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <main className="flex flex-col space-y-6 min-h-screen place-content-center">
        <section className="flex flex-col text-center bg-white rounded-md space-y-4 p-10 shadow-sm hover:shadow-md transition cursor-pointer">
          <h1 className="text-6xl font-extrabold text-cyan-800">
            Welcome to <a href="https://nextjs.org">Next.js 13!</a>
          </h1>

          <p className=" text-cyan-600 text-xl">
            Getting Hands on with NextJs v13.
          </p>
        </section>
        <div className="flex justify-center">
          <Link href="/blog">
            <button className="text-center px-4 py-2 rounded bg-slate-200">
              Go to Blog
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
