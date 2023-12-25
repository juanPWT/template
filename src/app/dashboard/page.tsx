"use client";

import React from "react";
import ButtonSubmit from "../components/ButtonSubmit";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

function Dashboard() {
  const session = useSession();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold my-2 text-gray-600">Ini Dashboard</h1>
      <div className="p-10 bg-white rounded-md my-2 flex justify-center items-center">
        {session?.status === "loading" ? (
          <h1 className="text-gray-800 font-bold text-2xl">Loading...</h1>
        ) : (
          <div className="flex flex-col items-center justify-center">
            {!session?.data?.user?.image ? (
              <Image
                src={"/person.png"}
                alt="profil image"
                width={80}
                height={80}
                className="rounded-full"
              />
            ) : (
              <Image
                src={session?.data?.user?.image as string}
                alt="profil image"
                width={80}
                height={80}
                className="rounded-full"
              />
            )}

            <h1 className="text-xl font-bold my-1 text-gray-600">
              {session?.data?.user?.name}
            </h1>
            <h1 className="text-sm font-extralight text-gray-600">
              {session?.data?.user?.email}
            </h1>
          </div>
        )}
      </div>
      <ButtonSubmit onClick={() => signOut()} type="button" danger>
        Logout
      </ButtonSubmit>
    </div>
  );
}

export default Dashboard;
