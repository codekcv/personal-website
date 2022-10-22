import Image from "next/image";
import { FC } from "react";
import ProfilePicture from "@public/images/christian_villamin.png";

const Hero: FC = () => {
  return (
    <div className="text-center px-6 mt-6 flex items-center max-w-xl mx-auto">
      <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-slate-500 mt-12">
        <Image
          className="scale-125"
          src={ProfilePicture}
          layout="fill"
          objectFit="cover"
          alt="Christian Villamin's Photo"
        />
      </div>

      <div>
        <h1 className="mt-12 text-2xl font-bold md:text-4xl">
          Christian Villamin
        </h1>

        <h3 className="text-slate-500 mt-2">
          I&apos;m a software engineer specializing on modern web technologies.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
