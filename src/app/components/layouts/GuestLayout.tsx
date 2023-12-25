import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface GuestLayoutProps {
  children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen  flex flex-col justify-between w-full">
      <Navbar />
      <div className="my-20 w-full px-10">{children}</div>
      <Footer />
    </div>
  );
};

export default GuestLayout;
