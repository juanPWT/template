"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ButtonSubmit from "./ButtonSubmit";
import NavItem from "./NavItem";
import { User } from "@prisma/client";

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const router = useRouter();
  const session = useSession();

  return (
    <nav className="w-full flex justify-between fixed top-0 px-10 py-5 bg-white shadow-sm ">
      {/* start */}
      <div className="w-full hidden md:flex flex-col md:flex-row justify-start items-start">
        <h1 className="block text-sm md:text-xl my-auto font-bold  text-gray-700">
          Template Next Auth
        </h1>
        <span className="flex mx-2 text-xs font-extralight text-gray-700 my-auto">
          with prisma
        </span>
      </div>
      {/* end  */}
      <div className="w-full flex justify-end items-end">
        {session?.status === "authenticated" ? (
          <NavItem image={user?.image} name={user?.name} />
        ) : (
          <ButtonSubmit type="button" onClick={() => router.push("/auth")}>
            login
          </ButtonSubmit>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
