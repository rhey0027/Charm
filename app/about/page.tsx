import Link from "next/link";

export default function page() {
  return (
    <div>
      <h3>About Page</h3>
      <Link href={"/"}>back to homepage</Link>
    </div>
  );
}
