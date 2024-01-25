"use client";
import ButtonSubmit from "@/app/components/ButtonSubmit";
import InputImage from "@/app/components/inputs/InputImage";
import { User } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ProfilPictureProps {
  user: User | null | undefined;
}

const ProfilPicture: React.FC<ProfilPictureProps> = ({ user }) => {
  const [priviewImage, setPriviewImage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);

  const handlerOnChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImage(file);
      setPriviewImage(url as string);
    }
  };

  const { handleSubmit } = useForm();

  const handlerOnSubmit = () => {
    setIsLoading(true);
    const formData = new FormData();

    //append
    formData.append("image", image as Blob);
    if (image === null) return;

    //api
    axios
      .put("/api/user/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setIsLoading(false);
        toast.success("success edit image");
        setInterval(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("error edit image");
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handlerOnSubmit)}
      className="w-full flex flex-col gap-2 justify-center items-center"
    >
      <InputImage
        id="image"
        disabled={isLoading}
        image={
          priviewImage === null ? `/image/user/${user?.image}` : priviewImage
        }
        onChange={handlerOnChangeImage}
      />
      <ButtonSubmit type="submit">edit image</ButtonSubmit>
    </form>
  );
};

export default ProfilPicture;
