"use client";
import ButtonSubmit from "@/app/components/ButtonSubmit";
import React, { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import InputDisble from "./InputDisble";
import InputController from "@/app/components/inputs/InputController";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface DataUserProps {
  email: string | undefined | null;
  name: string | undefined | null;
}

const DataUser: React.FC<DataUserProps> = ({ name, email }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      name: name,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (data.name === name) {
      setIsLoading(false);
      return;
    }

    axios
      .put("/api/user", data)
      .then((res) => {
        toast.success(`updated username to ${data.name}`);
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
        toast.error("something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-5 flex flex-col gap-5 items-center justify-center md:justify-start md:items-start"
    >
      <InputController
        control={control}
        id="name"
        label="username"
        type="text"
        defaultValue={name}
        disable={isLoading}
      />
      <InputDisble label="email" value={email} />

      <ButtonSubmit type="submit" disabled={isLoading}>
        edit
      </ButtonSubmit>
    </form>
  );
};

export default DataUser;
