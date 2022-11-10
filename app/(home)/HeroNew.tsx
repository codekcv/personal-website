"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import ProfilePicture from "@public/images/christian_villamin.jpg";

import { motion } from "framer-motion";
import Bobble from "components/Bobble";

import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCodepen,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaAngleDoubleDown, FaDev, FaFreeCodeCamp } from "react-icons/fa";
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

const HeroNew: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolled && window.scrollY === 0) setIsScrolled(false);
      else if (!isScrolled && window.scrollY !== 0) setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className="relative h-[calc(100vh-3.5rem)] flex justify-center items-center md:h-[calc(100vh-6rem)]">
      <div className="-translate-y-8 md:-translate-y-[6rem]">
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

          <p className="mt-4 rounded-[8px] md:mt-8 md:text-3xl">
            I&apos;m a software engineer specializing in the latest and greatest
            web technologies.
          </p>

          <ul className="flex justify-center items-center mt-4 md:mt-0">
            {contacts.map((item) => (
              <motion.div
                key={item.name}
                className="mx-1 md:mx-6 md:mt-8"
                whileHover={{ scale: 1.2 }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <item.icon className="text-3xl md:text-5xl" />
                </a>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8">
        <motion.div
          className="height-[48px]"
          variants={{
            out: { opacity: 0.15 },
            in: { opacity: 1 },
          }}
          initial="out"
          animate={!isScrolled ? "in" : "out"}
        >
          <motion.div
            className="height-[48px]"
            animate={{
              transform: [
                "translateY(-1rem)",
                "translateY(0rem)",
                "translateY(-1rem)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <FaAngleDoubleDown size={48} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroNew;
