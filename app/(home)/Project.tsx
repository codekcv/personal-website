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
  children: ReactNode;
};

const ProjectCard = ({ img, title, description, stack, children }: Props) => {
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
    <>
      <div>
        <div
          className="relative border-bluee-500"
          {...(width && { style: { width, height } })}
        >
          <div ref={imgRef} {...(width && { style: { position: "absolute" } })}>
            <Image
              className="rounded-xl w-full md:w-96"
              src={img}
              alt="NextPay Dashboard"
              priority
            />
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

      <div className="mt-4">
        <span className="text-blue-500 font-bold">Roles:</span>
        {children}
      </div>
    </>
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

        <div>
          <h3 className="mt-4">
            <span className="text-gray-400 text-xs">Under </span> NextPay
          </h3>

          <div>
            <ProjectCard
              img={np}
              title="NextPay"
              description="A next-generation all in one banking application that empowers businesses with functions like invoice sending, payment collections, payroll and more."
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
                Responsible for the disbursement processes. Automation,
                batching, CSV imports. Worked with customers and suppliers
                directories.
              </p>
            </ProjectCard>
          </div>
        </div>

        <div>
          <h3>
            <span className="text-gray-400 text-sm">Under </span>High Output
            Ventures
          </h3>

          <div>
            <h4>her.vn</h4>

            <ProjectCard
              img={hervn}
              title="her.vn"
              description="A news and blog website for better living for Vietnamese women."
              stack={[
                "TypeScript",
                "NextJS",
                "Zustand",
                "SWR",
                "React Hook Form",
              ]}
            >
              <p>
                Singlehandedly developed the entire application to production
                before passing the project to the Vietnamese team for them to
                maintain.
              </p>

              <p>
                Worked closely with designers to ensure their vision is living
                pixel perfect.
              </p>
            </ProjectCard>
          </div>

          <div>
            <h4>hov.co</h4>

            <ProjectCard
              img={hovco}
              title="hov.co"
              description="The company's main website that is beautifully designed and rich in unique animations."
              stack={[
                "TypeScript",
                "NextJS",
                "Framer Motion",
                "Redux",
                "React Hook Form",
              ]}
            >
              <p>
                Responsible for coding the landing page&apos;s grid based
                animation.
              </p>
            </ProjectCard>
          </div>

          <div>
            <h4>OneWallet</h4>

            {/* <ProjectCard
              img={codekcv}
              title=""
              description="My first personal site that has a unique take on presentation and rich with native animations."
              stack={[
                "TypeScript",
                "React",
                "Gatsby",
                "CSS Animations",
                "styled-components",
              ]}
            >
              <p>LALALA</p>
            </ProjectCard> */}
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl">Personal Projects</h2>

        <ProjectCard
          img={codekcv}
          title=""
          description="My first personal site that has a unique take on presentation and rich with native animations."
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

      <h2 className="font-bold text-xl">Mini Projects</h2>
    </section>
  );
}
