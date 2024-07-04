import Link from "next/link";

export default function page() {
  return (
    <div>
      <h3>Blog Page</h3>
      <Link href={"/"}>back to homepage</Link>
    </div>
  );
}
