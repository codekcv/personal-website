"use client";

import hervn from "@public/images/hervn2.png";
import hovco from "@public/images/hovco2.png";
import np from "@public/images/np1.png";
import Bobble from "components/Bobble";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  img: StaticImageData;
  title: string;
  description: string;
  stack: Array<string>;
  children: ReactNode;
};

const ProjectCard = ({ img, title, description, stack, children }: Props) => {
  return (
    <>
      <div className="relative">
        {/* <div className="absolute left-0 top-0 opacity-50 -z-10"> */}
        <div>
          <Image
            className=" rounded-xl w-full md:w-96"
            src={img}
            alt="NextPay Dashboard"
          />
        </div>

        <p className="z-10">What: {description}</p>

        <div className="flex gap-2">
          <h4 className="inline-block">Stack: </h4>

          <ul className="flex gap-2">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        Roles:
        <p>{children}</p>
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

            <ProjectCard
              img={hovco}
              title="hov.co"
              description="A real time betting admin dashboard."
              stack={[
                "TypeScript",
                "ReactJS",
                "Apollo Client",
                "Redux",
                "Formik",
              ]}
            >
              <p>LALALA</p>
            </ProjectCard>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-xl">Personal Projects</h2>

      <h2 className="font-bold text-xl">Mini Projects</h2>
    </section>
  );
}
