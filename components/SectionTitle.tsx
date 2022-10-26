import { FC } from "react";
import { Amatic_SC } from "@next/font/google";

const amatic_sc = Amatic_SC({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  children: string;
};

const SectionTitle: FC<Props> = ({ children }) => {
  return (
    <h1 className={`${amatic_sc.className} text-center`}>
      &#47;&#47; --------- &lt;
      <span className="text-green-700 font-medium">{children}</span> /&gt;
      --------- &#47;&#47;
    </h1>
  );
};

export default SectionTitle;
