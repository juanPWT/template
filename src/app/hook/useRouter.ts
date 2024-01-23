import { useMemo } from "react";
import { usePathname } from "next/navigation";

//icon
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const useRouter = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        path: "/dashboard",
        label: "Dashboard",
        isActive: pathname === "/dashboard",
        icon: IoMdHome,
      },
      {
        path: "/account",
        label: "Account",
        isActive: pathname === "/account",
        icon: FaUserAlt,
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRouter;
