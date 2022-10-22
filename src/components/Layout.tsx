import { FC } from "react";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow max-w-3xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
