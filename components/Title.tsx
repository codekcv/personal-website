type Props = {
  className?: string;
  children: string;
};

export default function Title({ className = "", children }: Props) {
  return (
    <h1
      className={`${className} text-center text-[rgb(55, 55, 80)] uppercase`}
      style={{ textShadow: "0 3px silver" }}
    >
      {children}
    </h1>
  );
}
