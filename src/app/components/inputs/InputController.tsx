"use client";
import clsx from "clsx";
import React from "react";
import { Controller, FieldValues, Control } from "react-hook-form";

interface InputControllerProps {
  control: Control<FieldValues>;
  label: string;
  id: string;
  type: "text" | "email" | "password" | "number";
  defaultValue?: string | number | null | undefined;
  required?: boolean;
  disable?: boolean;
}

const InputController: React.FC<InputControllerProps> = ({
  control,
  label,
  id,
  type,
  defaultValue,
  required,
  disable,
}) => {
  return (
    <div className="mt-1 flex flex-col gap-1">
      <label htmlFor={id} className="text-sm text-gray-500 font-semibold">
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        defaultValue={defaultValue}
        rules={{ required }}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className={clsx(
              "form-input block w-full rounded-md shadow-sm  sm:text-sm   border-0   ring-1   ring-gray-300   focus:ring-indigo-500   text-gray-900   placeholder-gray-300",
              disable && "bg-gray-100"
            )}
            disabled={disable}
            required={required}
          />
        )}
      />
    </div>
  );
};

export default InputController;
