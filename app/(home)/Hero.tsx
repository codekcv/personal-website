"use client";

import ProfilePicture from "@public/images/christian_villamin.jpg";
import Bobble from "components/Bobble";
import Chevron from "components/Chevron";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCodepen,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDev, FaFreeCodeCamp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const contacts = [
  {
    name: "GitHub",
    icon: AiOutlineGithub,
    link: "http://github.com/codekcv",
  },
  {
    name: "Twitter",
    icon: AiOutlineTwitter,
    link: "https://twitter.com/codekcv",
  },
  {
    name: "DEV",
    icon: FaDev,
    link: "https://dev.to/codekcv",
  },
  {
    name: "CodePen",
    icon: AiOutlineCodepen,
    link: "https://codepen.io/codekcv",
  },
  {
    name: "freeCodeCamp",
    icon: FaFreeCodeCamp,
    link: "https://www.freecodecamp.org/codekcv",
  },
  {
    name: "YouTube",
    icon: AiFillYoutube,
    link: "https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg",
  },
  {
    name: "LinkedIn",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/codekcv/",
  },
  {
    name: "Email",
    icon: IoIosMail,
    link: "mailto:ChristianVillamin31@gmail.com",
  },
];

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-3.5rem)] flex justify-center items-center md:h-[calc(100vh-6rem)]">
      <div className="-translate-y-8 md:-translate-y-[3.5rem]">
        <div
          className="mx-auto relative w-[192px] h-[192px] rounded-full overflow-hidden md:w-[256px] md:h-[256px]"
          style={{ boxShadow: "0 0 5px dimgray" }}
        >
          <Image
            className="object-cover"
            src={ProfilePicture}
            alt="Christian Villamin's Photo"
            fill
          />
        </div>

        <div className="text-center px-4 md:px-8">
          <Bobble>
            <h1 className="mt-4 text-4xl text-shadow md:text-8xl md:mt-8">
              Christian Villamin
            </h1>
          </Bobble>

          <p className="mt-4 text-blue-900 opacity-80 rounded-[8px] md:mt-6 md:text-3xl">
            A software engineer specializing in the latest and greatest web
            technologies.
          </p>

          <ul className="flex justify-center items-center mt-4 md:mt-6">
            {contacts.map((item) => (
              <motion.div
                key={item.name}
                className="mx-1 md:mx-8"
                whileHover={{
                  scale: 1.2,
                  color: "rgb(30 58 138)",
                }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <item.icon className="text-3xl md:text-5xl" />
                </a>
              </motion.div>
            ))}
          </ul>

          <p className="mt-8 text-xs font-mono">
            &#x2f;&#x2f; -- THIS SITE IS WORK-IN-PROGRESS -- &#x2f;&#x2f;
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8">
        <Chevron />
      </div>
    </div>
  );
}
