"use client";

import BlogPreview from "components/BlogPreview";
import Bobble from "components/Bobble";

export const Blogs = () => {
  return (
    <section className="mt-6">
      <Bobble>
        <h1 className="mt-4 text-4xl text-shadow md:text-6xl md:mt-8">BLOGS</h1>
        <p className="text-center font-mono text-xs">(Not yet connected)</p>
      </Bobble>

      <div className="flex flex-col gap-4">
        <BlogPreview
          title="Next.js 13 is bringing the full-stack power to the Frontend."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet lectus non nisi rhoncus sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempor erat eros, et pellentesque ex sodales ac. In eu elementum diam."
          date="2022-10-21"
        />

        <BlogPreview
          title="Why I prefer office based. Remote vs Office."
          description="Remote is cozy but office based is still more productive. I've
        been on a remote based work since the start of my career back in 2019
        December. Now, I ha"
          date="2022-06-12"
        />

        <BlogPreview
          title="What does it take to be a technical lead?"
          description="I'm just going to add a dummy text here, I could've used the Lorem Ipsum generator but I think it's time for something else."
          date="2022-10-24"
        />

        <h4 className="text-center text-xl mt-2">See More...</h4>
      </div>
    </section>
  );
};

export default Blogs;
