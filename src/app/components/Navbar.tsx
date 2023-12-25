"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ButtonSubmit from "./ButtonSubmit";

const Navbar = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <nav className="w-full flex justify-between fixed top-0 px-10 py-5 bg-white shadow-sm ">
      {/* start */}
      <div className="w-full flex flex-col md:flex-row justify-start items-start">
        <h1 className="text-sm md:text-xl my-auto font-bold  text-gray-700">
          Template Next Auth
        </h1>
        <span className="hidden md:flex mx-2 text-xs font-extralight text-gray-700 my-auto">
          with prisma
        </span>
      </div>
      {/* end  */}
      <div className="w-full flex justify-end items-end">
        {session?.status === "authenticated" ? (
          <ButtonSubmit type="button" onClick={() => router.push("/dashboard")}>
            dashboard
          </ButtonSubmit>
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
