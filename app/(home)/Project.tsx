"use client";

import np from "@public/images/np1.png";
import Bobble from "components/Bobble";
import type { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
  img: StaticImageData;
  title: string;
  description: string;
};

const ProjectCard = ({ img, title, description }: Props) => {
  return (
    <>
      <Image
        className="rounded-xl"
        src={img}
        width={480}
        alt="NextPay Dashboard"
      />
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

      <div>
        I&apos;ve worked with fintech solutions with NextPay. Handling the
        disbursement processes, such a batch disbursing, CSV imports.
      </div>

      <div>
        <h2>Company Projects</h2>

        <div>
          <h3>NextPay</h3>

          <div>
            <ProjectCard img={np} title="NextPay" description="noice" />
          </div>
        </div>

        <div>
          <h3>High Output Ventures</h3>

          <div>
            <h4>her.vn</h4>
          </div>

          <div>
            <h4>hov.co</h4>
          </div>

          <div>
            <h4>OneWallet</h4>
          </div>
        </div>
      </div>

      <div>Personal Projects</div>

      <div>Random Mini Projects</div>
    </section>
  );
}
