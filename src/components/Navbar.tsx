import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { FaHome, FaAlignLeft, FaCode, FaUserAlt } from "react-icons/fa";

const menuStyle = "w-full h-16 flex flex-col justify-center items-center";

const menus = [
  {
    name: "Home",
    link: "/",
    Icon: FaHome,
  },
  {
    name: "Blog",
    link: "/blog",
    Icon: FaAlignLeft,
  },
  {
    name: "Projects",
    link: "/projects",
    Icon: FaCode,
  },
  {
    name: "About",
    link: "/about",
    Icon: FaUserAlt,
  },
];

const Navbar: FC = () => {
  const router = useRouter();

  const isActiveRoute = (route: string) => {
    return router.asPath === route ? "text-zinc-900" : "text-zinc-400";
  };

  return (
    <nav className="fixed bottom-0 h-14 bg-white w-screen flex justify-evenly items-center shadow-inner">
      <ul className="flex justify-evenly items-center flex-grow">
        {menus.map((menu) => (
          <li className="w-full pt-2" key={menu.name}>
            <Link href={menu.link}>
              <div className={`${menuStyle} ${isActiveRoute(menu.link)}`}>
                <menu.Icon className="text-xl" />
                <h4 className="text-sm">{menu.name}</h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
