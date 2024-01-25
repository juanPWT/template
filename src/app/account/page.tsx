import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import ProfilPicture from "./components/ProfilPicture";
import getCurrentUser from "../action/getCurrentUser";
import DataUser from "./components/DataUser";

const Account = async () => {
  const user = await getCurrentUser();
  return (
    <AuthLayout>
      <div className="min-h-screen my-20 md:my-0 flex flex-col lg:flex-row gap-8 justify-center items-center ">
        <ProfilPicture user={user} />
        <DataUser name={user?.name} email={user?.email} />
      </div>
    </AuthLayout>
  );
};

export default Account;
