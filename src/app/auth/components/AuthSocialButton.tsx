"use client";

import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full rounded-md justify-center py-2 px-4 bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-400 hover:bg-gray-50 focus:outline-offset-0"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
