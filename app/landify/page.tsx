import React from "react";
import Header from "./header";
import Hero from "./hero";

type Props = {};

export default function Landify({}: Props) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-gradient-to-b from-yellow-50/20 via-amber-100/60 to-yellow-50/40">
      <Header />
      <main className="flex  flex-1 ">
        <Hero />
      </main>
    </div>
  );
}
