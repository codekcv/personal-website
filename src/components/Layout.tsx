import { FC } from "react";

type Props = {
  children: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
