import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <main className="flex flex-col min-h-screen place-content-center">
        <section className="flex flex-col text-center bg-white rounded-md space-y-4 p-10 shadow-sm hover:shadow-md transition cursor-pointer">
          <h1 className="text-6xl font-extrabold text-cyan-800">
            Welcome to <a href="https://nextjs.org">Next.js 13!</a>
          </h1>

          <p className=" text-cyan-600 text-xl">
            Getting Hands on with NextJs v13.
          </p>
        </section>
      </main>
    </div>
  );
}
