import React from "react";
import NavItem from "../NavItem";
import { User } from "@prisma/client";

interface NavbarHeaderProps {
  user: User | null;
}

const NavbarHeader: React.FC<NavbarHeaderProps> = ({ user }) => {
  return (
    <nav className="fixed w-full p-5 lg:hidden flex justify-between top-0">
      <div className="flex justify-end  w-full gap-2 items-center">
        <NavItem image={user?.image} name={user?.name} />
      </div>
    </nav>
  );
};

export default NavbarHeader;
