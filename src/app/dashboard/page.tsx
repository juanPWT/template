import React from "react";
import getCurrentUser from "../action/getCurrentUser";
import CardProfil from "./components/CardProfil";
import AuthLayout from "../components/layouts/AuthLayout";

const Dashboard = async () => {
  const user = await getCurrentUser();

  return (
    <AuthLayout>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold my-2 text-gray-600">Ini Dashboard</h1>
        <div className="p-10 mt-10 bg-white rounded-md my-2 flex justify-center items-center">
          <CardProfil user={user} />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
