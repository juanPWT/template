import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface ItemRoutingProps {
  label: string;
  icon: any;
  isActive?: boolean;
  path?: string;
  isLabel?: boolean;
}

const ItemRouting: React.FC<ItemRoutingProps> = ({
  icon: Icon,
  label,
  isActive,
  path,
  isLabel,
}) => {
  return (
    <Link
      href={`${path}`}
      className={clsx(
        `cursor-pointer  py-2 px-3 flex rounded-lg flex-col justify-center  items-center gap-1 hover:bg-gray-200`,
        isActive && "bg-gray-100"
      )}
    >
      <Icon className="text-slate-900 text-xl" />
      {isLabel && (
        <span className="text-slate-900 font-light text-xs">{label}</span>
      )}
    </Link>
  );
};
export default ItemRouting;
