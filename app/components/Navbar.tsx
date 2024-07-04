import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";
import { NavLinks } from "@/components";

export default function Navbar() {
  return (
    <div className="pt-6 flex items-center justify-between px-12 z-50">
      <Link
        href={"/"}
        className="flex items-center justify-center gap-4 cursor-pointer"
      >
        <Image
          src={logo}
          alt="logo-image"
          className="w-20 h-20 bg-white p-3 rounded-full"
        />
        <div className="flex items-center justify-center flex-col">
          <p className="text-2xl font-bold">Charm Haven</p>
          <p className="mt-0 text-xs font-lighter tracking-wider">
            BY: RHEA G. YU
          </p>
        </div>
      </Link>
      <NavLinks />
    </div>
  );
}
