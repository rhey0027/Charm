import { LatestProducts } from "@/components";
import { MdSearch } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="py-3 px-4 rounded-md flex items-center w-[600px] relative justify-between mb-10">
        <input
          type="search"
          name="search"
          placeholder="Search here..."
          className="px-2 py-2 w-full rounded-md bg-transparent border-1 border-sky-400 shadow-sm outline-none "
        />
        <div className="absolute top-5 right-5">
          <MdSearch className="text-3xl text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mb-10">
        <LatestProducts />
      </div>
    </main>
  );
}
