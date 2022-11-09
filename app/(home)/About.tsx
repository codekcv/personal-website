import Title from "components/Title";

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
    <div className="flex mt-8">
      <p className="text-gray-600 text-sm w-36 pt-[4px]">{date}</p>
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
                <p>
                  <span className="text-sm text-gray-600 ml-2 mr-4 my-2 inline-block">
                    0{idx + 1}
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
    <div className="relative h-[calc(100vh-3.5rem)] text-center flex justify-center items-center">
      <div>
        <Title className="text-6xl">About</Title>

        <div
          className="bg-[#f5f5f5] mt-8 p-4 text-left"
          style={{ boxShadow: "0 0 30px -10px rgba(150, 170, 180, 1)" }}
        >
          <div>
            <span className={spanStyles}>About Me</span>
            <p className="font-mono text-sm">
              Hi, I&apos;m Christian Villamin, a software engineer specializing
              in JavaScript, React and Node.
            </p>
          </div>

          <div className="mt-8">
            <span className={spanStyles}>Experience</span>

            <ExperienceCard
              date="Aug 2021 - Aug 2022"
              title="Senior Front-End Engineer"
              company="NextPay (YC W21)"
              href="https://nextpay.world/"
              points={[
                "Writing meaningful and structured documentations.",
                "Code base health check and clearing tech debts.",
                "Introduced TypeScript into the codebase for type safety.",
                "Mentoring Junior/Mid Front-End Engineers for best practices.",
              ]}
            />

            <ExperienceCard
              date="Dec 2019 — Jun 2021"
              title="Junior/Mid Level Front-End Engineer"
              company="High Output Ventures"
              href="https://hov.co/"
              points={["Performance Optimization"]}
            />
          </div>

          <div>
            <span className={spanStyles}>Thingies</span>
            <p className="font-mono text-sm">
              Core Team at https://reactjs.org.ph/
            </p>
            <p>Moderator @ ReactJS Philippines FB Group</p>
          </div>
        </div>
      </div>
    </div>
  );
}
