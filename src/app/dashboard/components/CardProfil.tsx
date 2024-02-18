"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface CardProfilProps {
  user: User | null;
}

const CardProfil: React.FC<CardProfilProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src={user?.image as string}
        alt="profil image"
        width={100}
        height={100}
        className="w-24 h-24 object-cover rounded-full absolute bottom-16 bg-white"
      />

      <h1 className="text-2xl font-bold mt-5 mb-1 text-gray-600">
        {user?.name}
      </h1>
      <h1 className="text-lg font-extralight text-gray-600">{user?.email}</h1>
    </div>
  );
};

export default CardProfil;
