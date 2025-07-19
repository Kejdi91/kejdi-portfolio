import React from "react";
import Navbar from "./layouts/Navbar";

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen text-white px-6 flex flex-col items-center pt-10">
        <h1 className="text-4xl font-bold mb-10 text-blue-500">About Me</h1>

        <div className="max-w-3xl w-full bg-black rounded-xl p-8 shadow-2xl transition-all duration-300 text-xl">
          <p className="mb-6 leading-relaxed tracking-wide">
            Hello, my name is{" "}
            <span className="font-semibold text-blue-500">Kejdi Nela</span>,
            I hold a degree from the{" "}
            <span className="font-semibold">University of Sports</span>.
          </p>

          <p className="mb-6 leading-relaxed tracking-wide">
            I have 3 years of experience as a{" "}
            <span className="font-semibold">physical education teacher</span>,
            where I also worked closely with children aged 6–12, focusing on{" "}
            <span className="italic">youth football training</span>.
            <br />
            <span className="mt-2 block">
              For 1 year, I managed the{" "}
              <span className="font-semibold text-blue-400">
                KF Tirana
              </span>{" "}
              girls' football team.
            </span>
          </p>

          <p className="mb-6 leading-relaxed tracking-wide">
            Over time, I transitioned into the world of{" "}
            <span className="font-semibold">software development</span>,
            successfully completing an internship program while enhancing my
            skills in modern web technologies.
          </p>

          <p className="mb-6 leading-relaxed tracking-wide">
            I’ve developed three front-end projects using{" "}
            <span className="font-semibold">HTML, CSS, and JavaScript</span>:{" "}
            <span className="italic">Car Dealrship</span>,{" "}
            <span className="italic">Restorantista</span>, and{" "}
            <span className="italic">Greenland</span>.
          </p>

          <p className="leading-relaxed tracking-wide">
            In addition, I’ve worked on two full-stack projects using{" "}
            <span className="font-semibold">
              React.js, Tailwind CSS, Node.js, Express.js, and PostgreSQL
            </span>
            : <span className="italic">Workforce Pro</span> (my first major
            project), and <span className="italic">Online Menu</span>, a
            collaborative effort with two other students.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
