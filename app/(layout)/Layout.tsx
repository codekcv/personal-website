import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-3xl mx-auto px-4 md:pt-[6rem] md:max-w-7xl md:w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
