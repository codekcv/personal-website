import Image from "next/image";
import { FC } from "react";
import ProfilePicture from "@public/images/christian_villamin_bg.jpg";
import { Amatic_SC } from "@next/font/google";

import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiCodepen,
  SiYoutube,
} from "react-icons/si";

import { AiFillCaretDown } from "react-icons/ai";

import Title from "components/Title";

const socialStyles = "text-2xl text-white cursor-pointer";

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

const amatic_sc = Amatic_SC({
  weight: "400",
  subsets: ["latin"],
});

const HeroNew: FC = () => {
  return (
    <div className="relative h-[calc(100vh-3.5rem)] text-center flex justify-center items-center md:h-screen">
      <div className="-translate-y-[90px] md:-translate-y-[90px]">
        <div
          className="mx-auto relative w-[180px] h-[180px] rounded-full overflow-hidden"
          style={{
            transform: "translateY(50%)",
            border: "5px dashed white",
            boxShadow: "0 0 5px dimgray",
          }}
        >
          <Image
            className="scale-150 object-cover"
            src={ProfilePicture}
            alt="Christian Villamin's Photo"
            fill
          />
        </div>

        <div
          className="text-center text-white px-4 pb-4 md:px-8 md:pb-8"
          style={{
            backgroundColor: "cadetblue",
            borderRadius: 30,
            border: "5px dashed white",
            boxShadow: "0 0 5px dimgray",
          }}
        >
          {/* <h1 className="text-white text-md">Christian Villamin</h1> */}
          <Title className="text-[8vw] mt-24 md:text-6xl">
            Christian Villamin
          </Title>
          <p
            className="mt-4 text-center text-sm bg-[rgba(0,0,0,0.25)] rounded-[8px] px-4 py-2 md:mt-8 md:text-md"
            style={{ color: "gainsboro" }}
          >
            I&apos;m a software engineer specializing in the latest and greatest
            web technologies.
          </p>

          <ul className="flex justify-evenly items-center mt-4 md:mt-8">
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

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8">
        <AiFillCaretDown className="animate-bounce text-3xl opacity-50 text-[cadetblue]" />
      </div>
    </div>
  );
};

export default HeroNew;
