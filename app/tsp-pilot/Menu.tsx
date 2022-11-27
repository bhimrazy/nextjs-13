import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  menu: Boolean;
};

export default function Menu({ menu }: Props) {
  const menus = [
    {
      title: "Home",
      active: true,
    },
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
    { title: "Login" },
    { title: "Sign Up" },
  ];
  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-full w-full bg-white shadow sm:hidden"
        >
          <ul className="flex flex-col divide-y divide-gray-100 text-center ">
            {menus &&
              menus.map((item, i) => (
                <li
                  className={`${
                    item?.active ? "text-blue-600" : "text-gray-600"
                  } py-4 transition hover:text-blue-500 `}
                  key={i}
                >
                  {item?.title}
                </li>
              ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
