import type { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-12 bg-slate-800 text-slate-200 flex justify-center items-center mt-12 mb-14">
      © Christian Villamin {currentYear}. All Rights Reserved.
    </footer>
  );
};

export default Footer;
