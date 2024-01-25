import React from "react";

interface InputDisbleProps {
  label: string;
  value: string | undefined | null;
}

const InputDisble: React.FC<InputDisbleProps> = ({ label, value }) => {
  return (
    <div className="mt-1 flex flex-col">
      <label className="my-1 text-gray-500 text-sm font-semibold">
        {label}
      </label>
      <input
        type="text"
        className=" form-input bg-gray-100 block w-full rounded-md shadow-sm sm:text-sm border-0 ring-1 ring-gray-300 text-gray-900 placeholder-gray-300 "
        value={value || ""}
        disabled
      />
    </div>
  );
};

export default InputDisble;
