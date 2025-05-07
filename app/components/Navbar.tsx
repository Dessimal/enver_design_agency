import React from "react";
import { Logo } from "../constants";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="mx-auto px-6 py-14 ">
      <div className="flex flex-row justify-between w-full">
        <div>
          <Image src={Logo} height={32} width={150} alt="logo image" />
        </div>
        <div className="hidden md:block">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>

        <div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
