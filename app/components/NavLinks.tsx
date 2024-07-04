"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ToggleTheme, UserLinks } from "@/components";
import { motion } from "framer-motion";
import { buttonClcik, slideDown } from "@/animations";
import { MdShoppingCart } from "react-icons/md";
import { avatar } from "@/assets";
import { useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();

  // ==== DROPDOWN MENU ========//
  const [isMenu, setIsMenu] = useState(true);
  const [user, setIsUser] = useState(false);
  // ============= NAVBAR LINKS
  const links = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "New Arrivals", href: "/new-arrivals" },
    { id: 3, name: "Accessories", href: "/accessories" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Reviews", href: "/reviews" },
    { id: 6, name: "About", href: "/about" },
  ];

  return (
    <nav className="flex items-center gap-4">
      <ToggleTheme />
      <ul className="hidden md:flex items-center gap-4">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={clsx(
                "text-sm font-light hover:border-b-1 hover:border-b-orange-300 duration-75 ease-in-out transition-all",
                { "text-orange-400": pathname === link.href }
              )}
            >
              <p className="px-4 py-2">{link.name}</p>
            </Link>
          );
        })}
      </ul>
      <motion.div {...buttonClcik} className="relative cursor-pointer">
        <MdShoppingCart className="text-3xl text-orange-300" />
        <div className="bg-red-700 text-white flex items-center justify-center rounded-full shadow-md absolute w-5 h-5 -top-3 left-3 overflow-hidden">
          <p className="text-sm">9</p>
        </div>
      </motion.div>
      {user ? (
        <div>
          <div>
            <motion.img
              {...buttonClcik}
              src={avatar?.src}
              alt="avatar"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full border-1 border-sky-600 cursor-pointer overflow-hidden object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {isMenu && (
            <motion.div
              {...slideDown}
              className="flex flex-col items-start gap-2"
            >
              <UserLinks />
            </motion.div>
          )}
        </div>
      ) : (
        <motion.div
          {...buttonClcik}
          className=" cursor-pointer bg-violet-400 px-4 rounded-md py-1 text-white"
        >
          <Link href={"/login"}>
            <p className="capitalize text-sm font-semibold">login</p>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
