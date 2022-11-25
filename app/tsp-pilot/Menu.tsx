import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Menu({ menu }: { menu: Boolean }) {
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
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-full w-full bg-white pt-2 shadow sm:hidden"
        >
          {/* Nav Menus */}
          <ul className="flex flex-col divide-y divide-gray-100 text-center">
            {menus &&
              menus.map((item, i) => (
                <li
                  className={`${
                    item?.active ? "text-blue-600" : "text-black"
                  } cursor-pointer py-4 transition hover:text-blue-600`}
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
