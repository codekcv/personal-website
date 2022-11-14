"use client";

import Bobble from "components/Bobble";

type ExperienceCardProps = {
  date: string;
  title: string;
  company: string;
  href: string;
  points: Array<string>;
};

const ExperienceCard = ({
  date,
  title,
  company,
  href,
  points,
}: ExperienceCardProps) => {
  return (
    <div className="mt-8 md:flex">
      <div className="flex items-center justify-center md:items-baseline">
        <span className="w-2 h-2 ml-[5px] rounded-full bg-slate-500 inline-block md:hidden" />

        <p className="pl-4 text-gray-600 text-sm w-full pt-0 md:w-40 md:pt-[4px] md:text-sm">
          {date}
        </p>
      </div>

      <div className="flex">
        <div className="border-[1px] ml-2 mr-4" />

        <div>
          <h2 className="font-bold text-xl">{title}</h2>

          <h3 className="text-blue-600">
            <a href={href} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          </h3>

          <ul>
            {points.map((point, idx) => (
              <li key={point}>
                <p className="text-sm md:text-base">
                  <span className="text-sm text-gray-600 ml-2 mr-4 my-2 inline-block">
                    {idx < 9 ? 0 : null}
                    {idx + 1}
                  </span>
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <>
      <Bobble>
        <h1 className="text-center mt-8 text-4xl text-shadow md:text-6xl">
          EXPERIENCE
        </h1>
      </Bobble>

      <div className="grid place-items-center">
        <div>
          <ExperienceCard
            date="Aug 2021 - Aug 2022"
            title="Senior Software Engineer"
            company="NextPay (YC W21)"
            href="https://nextpay.world/"
            points={[
              "Mentoring and code pairing with Front-End Engineers for best practices.",
              "Communicating with backend engineers and devops for a seamless workflow with the frontend team.",
              "Writing meaningful and structured documentations.",
              "Codebase health check and clearing tech debts.",
              "Refactoring convoluted code into a more efficient and clean code.",
              "Writing automated unit and integration tests.",
              "Setting up analytics and platform monitoring.",
              "Introduced TypeScript into the codebase for type safety and error catching",
              "Setting up code sharing sessions to keep everyone in the latest.",
              "Syncing with engineers for a streamlined and efficient workflow.",
            ]}
          />

          <ExperienceCard
            date="Dec 2019 — Jun 2021"
            title="Junior/Mid Level Software Engineer"
            company="High Output Ventures"
            href="https://hov.co/"
            points={[
              "Worked on multiple and different project types.",
              "Performance optimization and memory management.",
              "Interviewing potential frontend candidates.",
              "Responsible for programming sophisticated animations.",
              "Initiating ",
            ]}
          />

          <ExperienceCard
            date="Feb 2019— Jun 2019"
            title="Aspiring Web Developer"
            company=""
            href=""
            points={[
              "Learning HTML5, CSS3, JavaScript ES6+.",
              "Learning ReactJS and its ecosystem.",
              "Learning NodeJS and its ecosystem.",
              "Building a bunch of random projects.",
              "Finishing the whole freeCodeCamp curriculum and gaining fullstack certification.",
            ]}
          />

          <ExperienceCard
            date="Feb 2007 — Jun 2019"
            title="Self Taught Programmer"
            company=""
            href=""
            points={[
              "Experience isn't just company stuff. I've started programming at 10 years old.",
              "Programming in Blizzard's scripting language to create modded games.",
              "Won programming competition in college solving algorithm challenges.",
              "Using Java to make a 2D Android endless runner game. Building a calculator app.",
              "Using C# in Unity3D to build tower defense, 1st person horror, shooters, puzzle games.",
            ]}
          />
        </div>
      </div>
    </>
  );
}
