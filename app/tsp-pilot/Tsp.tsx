import React from "react";
import { DM_Sans } from "@next/font/google";
const dm = DM_Sans({ subsets: ["latin"], weight: "700" });

export default function Tsp() {
  const tsp_content = {
    title: "123 your TSP",
    list: [
      {
        title: "Our experts analyze the markets",
      },
      {
        title: "We send you our recommendations",
      },
      {
        title: "You move your funds yourself",
      },
    ],
  };
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto flex max-w-5xl flex-col space-y-16 px-8 sm:space-y-24">
        <h2
          className={`${dm.className} text-center text-5xl font-bold text-dark-blue`}
        >
          {tsp_content?.title}
        </h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tsp_content?.list &&
            tsp_content.list.map((item, i) => (
              <li
                className="flex flex-col items-center justify-center space-y-3 sm:items-start sm:space-y-6"
                key={i}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-100 text-lg font-bold text-blue-600 ">
                  {i + 1}
                </div>
                <h3
                  className={`${dm.className} max-w-[250px] text-center text-2xl font-bold text-dark-blue sm:text-start `}
                >
                  {item?.title}
                </h3>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
