import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";

const menuStyle =
  "w-full border-2 flex-grow h-16 flex justify-center items-center";

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar: FC = () => {
  const router = useRouter();

  const isActiveRoute = (route: string) => {
    return router.asPath === route ? "bg-slate-800" : "bg-slate-500";
  };

  return (
    <nav className="fixed bottom-0 h-16 bg-slate-500 w-screen flex justify-evenly items-center">
      <ul className="flex justify-between items-center flex-grow">
        {menus.map((menu) => (
          <li
            className={`${menuStyle} ${isActiveRoute(menu.link)}`}
            key={menu.name}
          >
            <Link href={menu.link}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
