import React from "react";
import Image from "next/image";
import { DM_Sans } from "@next/font/google";
const dm = DM_Sans({ subsets: ["latin"], weight: "700" });

export default function Cards() {
  const content = [
    {
      thumbnail: "/tsp-pilot/ExampleUpdate.svg",
      title: "Get Better Returns",
      description:
        "Access TSP Pilot’s high-performing fund allocations created by our financial experts. Choose from Conservative and Aggressive options to suit your investing goals.",
      cta: "Sign Up Free",
    },
    {
      thumbnail: "/tsp-pilot/MarketAnalysis.svg",
      title: "Understand the Market",
      description:
        "Know what’s impacting your retirement in under 10 minutes a week with our easy-to-read market summaries – and how to adjust fund percentages accordingly.",
      cta: "How It Works",
    },
    {
      thumbnail: "/tsp-pilot/AnnualizedReturns.svg",
      title: "Sleep Better at Night",
      description:
        "Rest assured knowing that TSP Pilot has performed exceptionally well since our 2004 inception, withstanding the test of time through both bull and bear markets.",
      cta: "View Performance",
    },
  ];
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-col space-y-16 px-8 py-8 lg:space-y-24">
        {content &&
          content.map((item, i) => (
            <div key={i} className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
              {/* Left Content */}
              <div className="order-2 flex flex-col justify-center space-y-4 sm:order-1 lg:space-y-8 ">
                <h1
                  className={`${dm.className} text-4xl font-bold text-dark-blue lg:text-7xl`}
                >
                  {item?.title}
                </h1>
                <p className="max-w-lg text-lg text-gray-600 lg:text-xl">
                  {item?.description}
                </p>
                <div className="group flex cursor-pointer flex-row items-center space-x-2 text-blue-700 ">
                  <span className="text-sm font-semibold">{item?.cta}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-4 w-4 transition duration-300 ease-in-out group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Image */}
              <div className="order-1 cursor-pointer sm:order-2 lg:p-8">
                <Image
                  className="h-full w-full rounded-md shadow transition duration-300 ease-in-out hover:-translate-y-2 lg:shadow-xl"
                  src={item?.thumbnail}
                  alt={item?.title}
                  width={504}
                  height={450}
                  priority
                />
              </div>
            </div>
          ))}

        <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl bg-[#1227E2] py-16 md:py-28">
          <h2
            className={`${dm.className} text-3xl font-bold text-white lg:text-5xl`}
          >
            Get 2 Weeks Free
          </h2>
          <p className="text-white">Try completely free for 14 days.</p>
          <div className="flex flex-col space-y-2 pt-10 md:flex-row md:space-y-0">
            <input
              type="text text-lg"
              className="rounded-lg  p-6 focus:outline-none md:rounded-r-none"
              placeholder="Enter your email"
            />
            <button className="rounded-lg md:rounded-l-none bg-yellow-300 p-6 font-semibold text-black transition hover:bg-yellow-200">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
