import React, { FC } from "react";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";

const NavbarMobile: FC = () => {
  return (
    <nav className="w-full relative flex items-center justify-between z-20">
      {/* Menu centered */}
      <div className="h-full flex flex-1 justify-center items-center">
        <ToggleMenu>
          <Link href="/" className="w-full py-2">
            Inicio
          </Link>
          <Link href="/tema/1" className="w-full py-2">
            Tema 1
          </Link>
        </ToggleMenu>
      </div>
    </nav>
  );
};

export default NavbarMobile;
