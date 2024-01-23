import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import getCurrentUser from "@/app/action/getCurrentUser";

interface GuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = async ({ children }) => {
  const user = await getCurrentUser();
  return (
    <div className="min-h-screen  flex flex-col justify-between w-full">
      <Navbar user={user} />
      <div className="my-20 w-full px-10">{children}</div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
