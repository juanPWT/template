import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-5 bottom-0 flex justify-between">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-sm my-auto font-bold  text-gray-700">
          Template Next Auth
        </h1>
        <span className="hidden md:flex mx-2 text-xs font-extralight text-gray-700 my-auto">
          with prisma
        </span>
      </div>
    </footer>
  );
};

export default Footer;
