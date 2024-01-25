"use client";

import useRouter from "@/app/hook/useRouter";
import React from "react";
import ItemRouting from "../ItemRouting";
import Image from "next/image";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";

interface SidebarProps {
  image: string | null | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ image }) => {
  const routes = useRouter();
  return (
    <div className="hidden min-h-screen fixed left-0 px-2 lg:flex flex-col justify-between bg-white ">
      <div className="pt-10 flex justify-center items-center">
        <Image
          src={image !== null ? `/image/user/${image}` : "/person.png"}
          alt="person"
          width={50}
          height={50}
          className="w-12 h-12 object-cover rounded-full bg-white"
        />
      </div>
      <div className="flex flex-col gap-2  justify-center items-center">
        {routes.map((data) => {
          return (
            <ItemRouting
              key={data.label}
              icon={data.icon}
              label={data.label}
              isActive={data.isActive}
              path={data.path}
            />
          );
        })}
      </div>
      <div className="my-5 flex justify-center items-center">
        <button
          onClick={() => signOut()}
          className="p-2 rounded-md hover:bg-gray-100 flex items-center text-xl"
        >
          <BiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
