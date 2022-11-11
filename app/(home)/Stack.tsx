"use client";

import Bobble from "components/Bobble";

const frontend = [
  { title: "React", href: "https://reactjs.org/" },
  { title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { title: "Next.js", href: "https://nextjs.org/" },
  { title: "Apollo Client", href: "https://www.apollographql.com/docs/react/" },
  { title: "Redux", href: "https://redux.js.org/" },
  { title: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { title: "styled-components", href: "https://styled-components.com/" },
  { title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { title: "React Hook Form", href: "https://react-hook-form.com/" },
  { title: "Formik", href: "https://formik.org/" },
];

const backend = [
  { title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { title: "Node.js", href: "https://nodejs.org/en/" },
  { title: "Express", href: "https://expressjs.com/" },
  { title: "GraphQL", href: "https://graphql.org/" },
  { title: "tRPC", href: "https://trpc.io/" },
  { title: "Supabase", href: "https://supabase.com/" },
  { title: "NestJS", href: "https://nestjs.com/" },
  {
    title: "Apollo Server",
    href: "https://www.apollographql.com/docs/apollo-server/",
  },
  { title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { title: "MongoDB", href: "https://www.mongodb.com/" },
  { title: "Socket.IO", href: "https://socket.io/" },
  { title: "Prisma", href: "https://www.prisma.io/" },
  { title: "Sanity", href: "https://www.sanity.io/" },
];

const mobile = [
  { title: "React Native", href: "https://reactnative.dev/" },
  { title: "NativeBase", href: "https://nativebase.io/" },
  { title: "NativeWind", href: "https://nativewind.dev" },
  { title: "Expo", href: "https://expo.dev/" },
  {
    title: "Bottom Sheet",
    href: "https://gorhom.github.io/react-native-bottom-sheet/",
  },
];

const development = [
  { title: "Git", href: "https://git-scm.com/" },
  { title: "VS Code", href: "https://code.visualstudio.com/" },
  { title: "Googling", href: "https://www.google.com/" },
  { title: "Documentations", href: "https://www.google.com/" },
  { title: "Linux", href: "https://www.linux.org/" },
  { title: "ESLint", href: "https://www.docker.com/" },
  { title: "Prettier", href: "https://www.docker.com/" },
  { title: "Notion", href: "https://www.notion.so/" },
  { title: "Figma", href: "https://www.figma.com/" },
  { title: "Storybook", href: "https://storybook.js.org/" },
  { title: "Datadog", href: "https://www.datadoghq.com/" },
  { title: "Mixpanel Analytics", href: "https://mixpanel.com/" },
];

const devops = [
  { title: "Containers", href: "" },
  { title: "Shell Scripting", href: "" },
  { title: "CI/CD", href: "" },
  { title: "Logging", href: "" },
  { title: "Cloud", href: "" },
  { title: "Monitoring", href: "" },
];

const AWS = [
  { title: "IAM", href: "https://www.figma.com/" },
  { title: "EC2", href: "https://storybook.js.org/" },
  { title: "S3", href: "https://storybook.js.org/" },
  { title: "Cloud Front", href: "https://storybook.js.org/" },
  { title: "Lambda", href: "https://storybook.js.org/" },
  { title: "Load Balancing", href: "https://www.datadoghq.com/" },
  { title: "Auto Scaling", href: "https://mixpanel.com/" },
  { title: "EBS", href: "https://www.notion.so/" },
  { title: "EFS", href: "https://www.notion.so/" },
  { title: "RDS", href: "https://www.notion.so/" },
];

const testing = [
  { title: "Cypress", href: "" },
  { title: "React Testing Library", href: "" },
  { title: "Jest", href: "" },
  { title: "Mocha", href: "" },
];

type CardProps = {
  title: string;
  technologies: Array<{
    title: string;
    href: string;
  }>;
};

const Card = ({ title, technologies }: CardProps) => {
  return (
    <div className="text-center max-w-sm">
      <h2 className="font-bold text-2xl">{title}</h2>
      <ul className="flex flex-wrap justify-evenly gap-x-2 gap-y-4 mt-4">
        {technologies.map((tech: { title: string; href: string }) => (
          <li key={tech.title}>
            <a
              className="border-blue-400 border-[1px] rounded-lg px-2 py-1"
              href={tech.href}
            >
              {tech.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Stack() {
  return (
    <section className="mt-32">
      <Bobble>
        <h1 className="mt-4 text-4xl text-shadow md:text-6xl md:mt-8">
          SKILLS
        </h1>
      </Bobble>

      <div className="flex flex-wrap justify-evenly gap-y-8 mt-12">
        <Card title="Front-End" technologies={frontend} />
        <Card title="Back-End" technologies={backend} />
        <Card title="Mobile" technologies={mobile} />
        <Card title="DevOps" technologies={devops} />
        <Card title="Development" technologies={development} />
        <Card title="AWS" technologies={AWS} />
        <Card title="Testing" technologies={testing} />
      </div>
    </section>
  );
}
