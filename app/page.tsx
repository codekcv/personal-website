import Blogs from "./(home)/Blogs";
import Hero from "./(home)/Hero";
import Projects from "./(home)/Project";
import Stack from "./(home)/Stack";

export default function Home() {
  return (
    <div>
      <section className="max-w-3xl mx-auto">
        <Hero />

        <div className="px-4">
          <h1 className="text-center mt-4">
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
}
