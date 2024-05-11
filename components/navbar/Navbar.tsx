import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = async () => {
  return (
    <nav className="flex p-4  m-2 rounded items-center">
      <Link href="/">
        <Image src="/logo.png" alt="bricks logo" width={110} height={110} />
      </Link>

      <div className="flex flex-1"></div>
    </nav>
  );
};
