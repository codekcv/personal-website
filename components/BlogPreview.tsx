import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  date: string;
};

const BlogPreview: FC<Props> = ({ title, description, date }) => {
  return (
    <div className="shadow-md p-4 text-left">
      <h2 className="text-md font-medium">{title}</h2>
      <p className="text-xs text-zinc-500 mt-2">Posted on {date}</p>

      {/* <p className="mt-1">
        {description}...{" "}
        <Link href="/">
          <span className="cursor-pointer text-blue-700">Read more.</span>
        </Link>
      </p> */}
    </div>
  );
};

export default BlogPreview;
