import { Amatic_SC } from "@next/font/google";
import Blogs from "./(home)/Blogs";
import Hero from "./(home)/Hero";
// import Projects from "./(home)/Project";
import Stack from "./(home)/Stack";

const amatic_sc = Amatic_SC({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <section className="max-w-3xl mx-auto">
        <Hero />

        <div className="px-4">
          <h1 className={`${amatic_sc.className} text-center mt-4`}>
            My personal slice of the internet.
          </h1>

          <Blogs />
          <Stack />
        </div>
      </section>

      <footer />
    </div>
  );
}
