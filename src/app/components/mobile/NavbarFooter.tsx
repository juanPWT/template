"use client";
import React from "react";
import useRouter from "@/app/hook/useRouter";
import ItemRouting from "../ItemRouting";

const NavbarFooter = () => {
  const routes = useRouter();

  return (
    <footer className="fixed bottom-0 w-full p-2 bg-white  lg:hidden flex justify-center items-center gap-10">
      {routes.map((data) => {
        return (
          <ItemRouting
            key={data.label}
            icon={data.icon}
            label={data.label}
            isActive={data.isActive}
            path={data.path}
            isLabel
          />
        );
      })}
    </footer>
  );
};

export default NavbarFooter;
