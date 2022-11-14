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
              in JavaScript, React, and Node. I enjoy analyzing codebases.
              I&apos; have an obsession with optimizing not just to make things
              efficient but also easier to maintain, albeit codewise or
              workflow. Recently, ...
            </p>

            <p className="text-sm mt-4">
              I have worked with a small company and a start-up YC company. ...
              details ...
            </p>
          </div>

          <div>
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

          <div>
            <span className={spanStyles}>Random Thingies</span>
            <ul>
              <li>I love fantasy and mystery books.</li>
              <li>I play classical piano and guitar.</li>
              <li>I like walking to arrange my thoughts.</li>
              <li>I enjoy puzzles and brainteasers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
