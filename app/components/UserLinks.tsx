"use client";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";

// ===== MAP OF USER LINKS ======//
const uLinks = [
  { id: 1, name: "My Dashboard", href: "/dashboard" },
  { id: 2, name: "In-Stock", href: "/dashboard/instock" },
  { id: 3, name: "My Profile", href: "/dashboard/profile" },
];

export default function UserLinks() {
  return (
    <div className="relative cursor-pointer">
      <ul className=" absolute top-1 -right-8 w-36 flex flex-col items-start bg-slate-100 shadow-md rounded-md px-1 py-2">
        {uLinks.map((ulink) => {
          return (
            <Link
              key={ulink.id}
              href={ulink.href}
              className="text-sm font-light hover:text-gray-300 duration-75 ease-in-out hover:font-bold"
            >
              <p className="px-4 py-2">{ulink.name}</p>
              <hr />
            </Link>
          );
        })}
        <div className="flex items-center justify-center gap-3 mt-3 hover:text-red-600">
          <LuLogOut className="text-xl cursor-pointer ml-3 text-red-600" />
          <p>Logout</p>
        </div>
      </ul>
    </div>
  );
}
