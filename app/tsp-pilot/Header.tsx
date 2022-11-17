import Image from "next/image";

export default function Header() {
  const header_content = {
    logo: {
      title: "TSP Pilot",
      path: "/tsp-pilot/logo.png",
    },
    menu: [
      {
        title: "Why TSP Pilot",
      },
      {
        title: "How It Works",
      },
      {
        title: "Performance",
      },
      { title: "Pricing" },
    ],
  };
  return (
    <header className="w-full bg-white py-6 shadow">
      <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between px-8">
        {/* Logo */}
        <Image
          src={header_content?.logo?.path}
          height={30}
          width={146}
          priority
          alt={header_content?.logo?.title}
        />

        {/* Nav menu items */}
        <ul className="item-center hidden flex-row space-x-8 lg:flex">
          {header_content?.menu &&
            header_content?.menu.map((item, i) => (
              <li
                className="cursor-pointer transition hover:text-blue-600"
                key={i}
              >
                {item?.title}
              </li>
            ))}
        </ul>

        <div>
          {/* Buttons */}
          <div className="hidden flex-row space-x-4 md:flex">
            <button className="rounded-lg border-2 border-dark-blue px-8 py-4 transition hover:text-dark-blue ">
              Login
            </button>
            <button className="rounded-lg bg-dark-blue px-8 py-4 font-medium text-white transition hover:bg-dark-blue/90">
              Sign Up
            </button>
          </div>

          {/* Menu Icon */}
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
