import "../globals.css";
import { Poppins } from "@next/font/google";
const poppins = Poppins({ weight: "400" });
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white font-display">
      <Head>
        <title>Landify | Academy of your business.</title>
      </Head>
      {children}
    </div>
  );
}
