"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="border-b h-20 flex justify-between items-center font-medium px-10">
      <Link href="/">
        <Image
          src="/logo-dark.svg"
          alt="Hunting Coder Logo"
          width={50}
          height={24}
          priority
        />
      </Link>
      <ul className="flex gap-10">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </div>
  );
}
