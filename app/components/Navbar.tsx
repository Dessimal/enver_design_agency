import React from "react";
import { Logo } from "../constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="mx-auto px-6 py-14 ">
      <div className="flex flex-row justify-between w-full">
        <div>
          <Image src={Logo} height={32} width={150} alt="logo image" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
