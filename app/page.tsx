import About from "./(home)/About";
import Blogs from "./(home)/Blogs";
import Experience from "./(home)/Experience";
import Hero from "./(home)/Hero";
import Projects from "./(home)/Project";
import Skills from "./(home)/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blogs />
    </>
  );
}
