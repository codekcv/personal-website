import Image from "next/image";
import { FC } from "react";
import ProfilePicture from "@public/images/christian_villamin.png";

import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiCodepen,
  SiYoutube,
} from "react-icons/si";

const socialStyles = "text-2xl text-slate-600 cursor-pointer";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/codekcv",
    Icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/codekcv/",
    Icon: SiLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/codekcv",
    Icon: SiTwitter,
  },
  {
    name: "Codepen",
    href: "https://codepen.io/codekcv",
    Icon: SiCodepen,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg/videos",
    Icon: SiYoutube,
  },
];

import { Amatic_SC } from "@next/font/google";

const amatic_sc = Amatic_SC({
  weight: "400",
  subsets: ["latin"],
});

const Hero: FC = () => {
  return (
    <div className="text-center px-6 mt-6 flex items-center max-w-xl mx-auto">
      <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-slate-500">
        <Image
          className="scale-125 object-cover"
          src={ProfilePicture}
          alt="Christian Villamin's Photo"
          fill
        />
      </div>

      <div className="px-4">
        <h1 className="text-4xl font-bold md:text-4xl" style={amatic_sc.style}>
          Christian Villamin
        </h1>

        <h3 className="text-slate-500 mt-2">
          I specialize on modern web technologies. All things fast.
        </h3>

        <ul className="flex justify-evenly items-center mt-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.Icon className={socialStyles} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
