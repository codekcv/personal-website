import Hero from "./Hero";
import Blogs from "./Blogs";
import Stack from "./Stack";
import Projects from "./Project";
import localFont from "@next/font/local";

const amatic_sc = localFont({
  src: "../(fonts)/AmaticSC-Regular.ttf",
  preload: true,
});

const Home = () => {
  return (
    <div>
      <section className="max-w-3xl mx-auto">
        <Hero />

        <div className="px-4">
          <h1 className="text-center mt-4" style={amatic_sc.style}>
            My personal slice of the internet.
          </h1>

          <Blogs />
          <Stack />
          <Projects />
        </div>
      </section>

      <footer />
    </div>
  );
};

export default Home;
