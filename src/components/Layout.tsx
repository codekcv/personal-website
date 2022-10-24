import { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto md:pt-12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
