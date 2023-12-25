import React from "react";
import GuestLayout from "../components/layouts/GuestLayout";

const Home = () => {
  return (
    <GuestLayout>
      <div className="w-full min-h-screen  flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold bg-gradient-to-b from-gray-900 text-transparent bg-clip-text ">
          Hello guest
        </h1>
        <p className="text-center text-gray-600 mt-1">
          Hollo bre, template ini adalah template next js yang sudah di
          configurasi dengan next-auth dan prisma js. Selamat meng obrak
          abrik😁. check my github{" "}
          <a
            href="http://github.com/juanPWT"
            target="_blank"
            className="underline text-blue-500"
          >
            juan-pwt
          </a>
        </p>
      </div>
    </GuestLayout>
  );
};

export default Home;
