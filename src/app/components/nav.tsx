"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();
  return (
    <nav className=" bg-primary fixed flex w-full justify-around p-4">
      <Link href="/">
        <p className="text-white ">Home</p>
      </Link>
      <Link href="/projets">
        <p className="text-white">Projets</p>
      </Link>
      <Link href="/cv">
        <p className="text-white">CV</p>
      </Link>
    </nav>
  );
}

export default Navigation;
