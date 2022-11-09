type Props = {
  className?: string;
  children: string;
};

export default function Title({ className = "", children }: Props) {
  return (
    <h1
      className={className}
      style={{
        color: "rgb(55, 55, 80)",
        fontSize: "8vw",
        textShadow: "0 3px silver",
        textTransform: "uppercase",
      }}
    >
      {children}
    </h1>
  );
}
