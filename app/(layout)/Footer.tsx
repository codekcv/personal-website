import type { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-8 text-sm w-full bg-slate-800 text-slate-200 flex max-w-3xl mx-auto justify-center items-center mt-12 mb-14 md:w-auto md:mb-0">
      <div className="hidden md:block md:bg-gradient-to-r md:from-white md:h-12 md:w-24 md:mr-12" />
      © Christian Villamin {currentYear}. All Rights Reserved.
      <div className="hidden md:block md:bg-gradient-to-l md:from-white md:h-12 md:w-24 md:ml-12" />
    </footer>
  );
};

export default Footer;
