import React from "react";
import { Logo, NavLinks } from "../constants";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="mx-auto px-6 py-14 ">
      <div className="flex flex-row justify-between w-full max-w-[1120px] mx-auto">
        <div>
          <Image src={Logo} height={22} width={130} alt="logo image" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-2">
            {NavLinks.map((navLink) => (
              <li className="cursor-pointer" key={navLink}>
                {navLink}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
