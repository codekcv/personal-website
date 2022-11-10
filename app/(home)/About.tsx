const spanStyles = "indent-4 block font-bold text-lg mb-2";

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
      <div className="flex items-center md:items-baseline">
        <span className="w-2 h-2 ml-[5px] rounded-full bg-slate-500 inline-block md:hidden" />
        <p className="pl-4 text-gray-600 text-sm w-full pt-0 md:w-40 md:pt-[4px] md:text-sm">
          {date}
        </p>
      </div>
      <div className="flex">
        <div className="border-[1px] ml-2 mr-4"></div>
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

export default function About() {
  return (
    <div className="relative text-center flex justify-center items-center">
      <div>
        <div
          className="bg-[#f5f5f5] mt-8 p-4 text-left"
          style={{ boxShadow: "0 0 30px -10px rgba(150, 170, 180, 1)" }}
        >
          <div>
            <span className={spanStyles}>About Me</span>
            <p className="font-mono text-sm">
              Hi, I&apos;m Christian Villamin, a software engineer specializing
              in JavaScript, React, and Node. I enjoy analyzing codebases,
              optimizing. Making things efficient, code and work process.
              Recently, I&apos;ve been also into leadership.
            </p>

            <p className="font-mono text-sm mt-4">
              I&apos;ve started programming when I was 10.
            </p>
          </div>

          <div className="mt-8">
            <span className={spanStyles}>Experience</span>

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
                "Performance optimization and memory management.",
                "Interviewing potential frontend candidates.",
                "Responsible for programming sophisticated animations.",
                "Initiating ",
              ]}
            />
          </div>

          <div>
            <span className={spanStyles}>Thingies</span>
            <p className="font-mono text-sm">
              Core Team at https://reactjs.org.ph/
            </p>
            <p>Moderator @ ReactJS Philippines FB Group</p>

            <p>I enjoy playing the piano and guitar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
