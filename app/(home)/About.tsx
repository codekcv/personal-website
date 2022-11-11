"use client";

import Bobble from "components/Bobble";

const spanStyles = "indent-4 block font-bold text-lg mb-2";

export default function About() {
  return (
    <div className="text-center">
      <div>
        <Bobble>
          <h1 className="mt-4 text-4xl text-shadow md:text-6xl md:mt-8">
            ABOUT
          </h1>
        </Bobble>

        <div
          className="bg-[#f5f5f5] mt-8 p-4 text-left"
          style={{ boxShadow: "0 0 30px -10px rgba(150, 170, 180, 1)" }}
        >
          <div>
            <span className={spanStyles}>Who</span>

            <p className="text-sm">
              Hi, I&apos;m Christian Villamin, a software engineer specializing
              in JavaScript, React, and Node. I enjoy analyzing codebases,
              optimizing. Making things efficient, code and work process.
              Recently, I&apos;ve been also into leadership.
            </p>

            <p className="text-sm mt-4">
              I&apos;ve started programming when I was 10.
            </p>
          </div>

          <div>
            <span className={spanStyles}>Thingies</span>

            <p className="text-lg">
              Core Team @{" "}
              <a
                className="text-blue-500"
                href="https://reactjs.org.ph/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReactJS Philippines
              </a>
            </p>

            <p className="text-lg">
              Moderator @{" "}
              <a
                className="text-blue-500"
                href="https://www.facebook.com/groups/reactjsphilippines"
                target="_blank"
                rel="noopener noreferrer"
              >
                ReactJS PH Group
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
