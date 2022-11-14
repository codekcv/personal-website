"use client";

import codekcv from "@public/images/codekcv.jpg";
import hervn from "@public/images/hervn.jpg";
import hovco from "@public/images/hovco.jpg";
import np from "@public/images/nextpay.jpg";
import Bobble from "components/Bobble";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type Props = {
  img: StaticImageData;
  title: string;
  description: string;
  stack: Array<string>;
  href: string;
  children: ReactNode;
};

const ProjectCard = ({
  img,
  title,
  description,
  stack,
  href,
  children,
}: Props) => {
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (imgRef.current) {
      setWidth(imgRef.current.offsetWidth);
      setHeight(imgRef.current.offsetHeight);
    }
  }, []);

  return (
    <div {...(width && { style: { width } })}>
      <div>
        <div
          className="relative border-blue-500"
          {...(width && { style: { width, height } })}
        >
          <div ref={imgRef} {...(width && { style: { position: "absolute" } })}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-xl w-full md:w-96"
                src={img}
                alt="NextPay Dashboard"
                priority
              />
            </a>
          </div>

          <p
            className="absolute top-1/4 -translate-y-1/2 text-center w-full text-3xl font-bold"
            style={{ textShadow: "4px 4px 0px #fff" }}
          >
            {title}
          </p>

          <p className="absolute bottom-0 text-white bg-gray-800 opacity-75 rounded-b-xl w-full p-2 text-justify text-sm">
            {description}
          </p>
        </div>

        <div className="mt-2">{children}</div>

        <div className="flex gap-2 mt-4">
          <h4 className="inline-block">
            <span className="text-blue-500 font-bold">Stack</span>:{" "}
          </h4>

          <ul className="flex gap-2 flex-wrap">
            {stack.map((tech) => (
              <li
                key={tech}
                className="border-[1px] border-blue-400 rounded-lg text-xs px-2 py-1"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  return (
    <section className="mt-8">
      <Bobble>
        <h1 className="mt-4 text-4xl text-shadow md:text-6xl md:mt-8">
          PROJECTS
        </h1>
      </Bobble>

      <div className="mt-8">
        <h2 className="font-bold text-xl">Company Projects</h2>

        <div className="flex flex-wrap gap-8 justify-evenly items-center mt-4 md:mt-8">
          <ProjectCard
            img={np}
            title="NextPay"
            description="A next-generation all in one banking application that empowers businesses with functions like invoice sending, payment collections, payroll and more."
            href="https://nextpay.world/"
            stack={[
              "React",
              "Node.js",
              "TypeScript",
              "Redux",
              "Apollo Client",
              "Strapi",
              "Material UI",
              "Formik",
            ]}
          >
            <p>
              Responsible for the disbursement processes. Automation, batching,
              CSV imports. Worked with customers and suppliers directories.
            </p>
          </ProjectCard>

          <ProjectCard
            img={hervn}
            title="her.vn"
            description="A news and blog website for better living for Vietnamese women."
            href="https://her.vn/"
            stack={[
              "TypeScript",
              "Next.js",
              "Zustand",
              "SWR",
              "React Hook Form",
            ]}
          >
            <p>
              Singlehandedly developed a news and blogging site for a Vietnamese
              client. Worked closely with designers and stakeholders.
            </p>
          </ProjectCard>

          <ProjectCard
            img={hovco}
            title="hov.co"
            description="The company's main website that is beautifully designed and rich in unique animations."
            href="https://www.hov.co/"
            stack={[
              "TypeScript",
              "Next.js",
              "Framer Motion",
              "Redux",
              "React Hook Form",
            ]}
          >
            <p>
              Responsible for developing an exquisite grid-based animations that
              is mobile and desktop responsive.
            </p>
          </ProjectCard>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-xl mb-4">Personal Projects</h2>

        <ProjectCard
          img={codekcv}
          title=""
          description="My first personal site that has a unique take on presentation and rich with native animations."
          href="https://codekcv.github.io/"
          stack={[
            "TypeScript",
            "React",
            "Gatsby",
            "CSS Animations",
            "styled-components",
          ]}
        >
          {" "}
        </ProjectCard>
      </div>

      {/* <h2 className="font-bold text-xl">Mini Projects</h2> */}
    </section>
  );
}
