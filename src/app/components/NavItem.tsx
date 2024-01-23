"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface NavItemProps {
  image: string | null | undefined;
  name: string | null | undefined;
}

const NavItem: React.FC<NavItemProps> = ({ image, name }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex justify-end items-center gap-3 relative">
      <p className="text-slate-900 text-sm lg:text-base">{name}</p>
      <Image
        src={image || "/person.png"}
        alt="user"
        width={50}
        height={50}
        onClick={() => setShow(!show)}
        className="hover:opacity-50 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-slate-900 rounded-full bg-white"
      />
      {show && <Dropdown />}
    </div>
  );
};

const Dropdown = () => {
  return (
    <div className="z-10 absolute top-20  bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700">
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <Link
            href="/dashboard"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-end"
          >
            Dashboard
          </Link>
        </li>
        <li
          onClick={() => signOut()}
          className="flex px-4 py-2 bg-red-500 m-2 text-center cursor-pointer rounded-lg text-white hover:bg-red-400 dark:hover:bg-gray-600 dark:hover:text-white "
        >
          log out
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
