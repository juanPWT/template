import React from "react";
import NavbarFooter from "../mobile/NavbarFooter";
import Sidebar from "../sidebar/Sidebar";
import NavbarHeader from "../mobile/NavbarHeader";
import getCurrentUser from "@/app/action/getCurrentUser";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = async ({ children }) => {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen max-w-full flex flex-col justify-between">
      <NavbarHeader user={user} />
      <div className="w-full flex ">
        <Sidebar image={user?.image} />
        <div className="w-full lg:ml-16 ">{children}</div>
      </div>
      <NavbarFooter />
    </div>
  );
};

export default AuthLayout;
