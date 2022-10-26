import React from "react";
import Link from "next/link";

export default function Header() {
  const header_content = {
    logo: "Landify",
    nav_items: ["Product", "Solutions", "Resources", "Pricing"],
    button: "Subscribe",
  };
  return (
    <header className="z-20 bg-gradient-to-b from-white to-yellow-50/50 ">
      {/* Nav Bar */}
      <nav className="mx-auto flex max-w-6xl flex-row items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="relative">
          <span className="text-2xl font-black">{header_content?.logo}</span>
          <span className="absolute -right-2 top-0 text-[8px]">TM</span>
        </Link>
        {/* Nav Items */}
        <div className="flex flex-row space-x-8 transition">
          <ul className="flex flex-row space-x-6 font-medium">
            {header_content?.nav_items &&
              header_content?.nav_items.map((item, i) => (
                <li
                  key={i}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-gray-600 hover:text-gray-800"
                >
                  <span>{item}</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
              ))}
          </ul>
          <button className="cursor-pointer rounded-lg bg-black px-6 py-4 font-medium text-white hover:bg-gray-800">
            {header_content?.button}
          </button>
        </div>
      </nav>
    </header>
  );
}
