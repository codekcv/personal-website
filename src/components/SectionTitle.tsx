import { FC } from "react";

type Props = {
  children: string;
};

const SectionTitle: FC<Props> = ({ children }) => {
  return (
    <h1 className="text-center ">
      &#47;&#47; --------- &lt;
      <span className="text-green-700 font-medium">{children}</span> /&gt;
      --------- &#47;&#47;
    </h1>
  );
};

export default SectionTitle;
