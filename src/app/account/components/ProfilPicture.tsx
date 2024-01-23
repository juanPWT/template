"use client";
import ButtonSubmit from "@/app/components/ButtonSubmit";
import InputImage from "@/app/components/inputs/InputImage";
import { User } from "@prisma/client";
import React from "react";

interface ProfilPictureProps {
  user: User | null | undefined;
}

const ProfilPicture: React.FC<ProfilPictureProps> = ({ user }) => {
  const [priviewImage, setPriviewImage] = React.useState<string | null>(null);

  const handlerOnChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);

      setPriviewImage(url as string);
    }
  };

  return (
    <form className="w-full flex flex-col gap-2 justify-center items-center">
      <InputImage
        id="image"
        image={priviewImage === null ? user?.image : priviewImage}
        onChange={handlerOnChangeImage}
      />
      <ButtonSubmit type="submit">edit image</ButtonSubmit>
    </form>
  );
};

export default ProfilPicture;
