"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Link from "next/link";
import gsap from "gsap";

export default function TracingBeamDemo() {
  useEffect(() => {
    gsap.to(".Link", {
      scale: 1.5,
      opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <TracingBeam className="px-6 z-0 mt-24">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-mainS text-white rounded-full text-md w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl text-white mb-4")}>{item.title}</p>

            <div className="text-sm text-white prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-44 flex flex-col items-center">
        <p className="text-3xl text-bone">Resume</p>
        <p className="text-xl mt-2 text-center text-bone">
          Download my resume to learn more about my professional background and
          experiences.
        </p>
        <a href="/ّFinal_resume.pdf" download>
          <button className="px-4 hover:bg-black m-5 py-2 bg-white text-black rounded-lg hover:text-white font-semibold bg-transparent border border-white transition">
            Download Resume
          </button>
        </a>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <p className="text-3xl text-bone">Education</p>
        <p className="text-xl mt-2 text-center text-bone">
          Computer Programming And Analysis, Advanced Diploma, April 2025 George
          Brown College, Toronto Ontario
        </p>
      </div>
      <div className="bg-black mt-20">
        <Link
          href="/projects"
          className={`flex justify-center mb-10 text-bone Link`}
        >
          Click to continue
        </Link>
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Full Stack Web Application",
    description: (
      <>
        <p className="text-xl">
          With experience in responsive web design and database management using
          OracleDB and MySQL. Passionate about software development, I aim to
          apply my skills in a dynamic team environment and contribute to
          innovative projects.
        </p>
      </>
    ),
    badge: "Web Application",
    image: "/javascript.jpg",
  },
  {
    title: "Java, Gradle, Docker",
    description: (
      <>
        <p className="text-xl">
          Experienced in building scalable applications using Java with Gradle
          for dependency management and Docker for containerization. Passionate
          about optimizing development workflows and ensuring seamless
          deployments.
        </p>
      </>
    ),
    badge: "Software Development",
    image: "/java.jpg",
  },
  {
    title: "GraphQL, Node.js, Express.js, MongoDB",
    description: (
      <>
        <p className="text-xl">
          Skilled in building robust backend applications using Node.js and
          Express.js, leveraging GraphQL for efficient data fetching and MongoDB
          for flexible, scalable database management.
        </p>
      </>
    ),
    badge: "Backend Development",
    image: "/node.jpg",
  },
  {
    title: "Android SDK, Java",
    description: (
      <>
        <p className="text-xl">
          Proficient in Android app development using Java and the Android SDK,
          with experience in building intuitive and high-performance mobile
          applications. Skilled in UI/UX design, API integration, and optimizing
          app performance.
        </p>
      </>
    ),
    badge: "Mobile Development",
    image: "/android.jpg",
  },
  {
    title: "Github actions, Docker",
    description: (
      <>
        <p className="text-xl">
          Experienced in automating CI/CD pipelines using GitHub Actions to
          streamline development workflows. Proficient in containerizing
          applications with Docker for scalable and efficient deployments.
        </p>
        <p className="text-xl">
          Passionate about DevOps practices, optimizing build processes, and
          ensuring seamless integration and delivery of software projects.
        </p>
      </>
    ),
    badge: "DevOps",
    image: "/github.jpg",
  },
  {
    title: "Swift, UIKit",
    description: (
      <>
        <p className="text-xl">
          Skilled in iOS app development using Swift and UIKit, creating
          intuitive and visually appealing mobile applications. Experienced in
          building responsive UI components, handling user interactions, and
          optimizing app performance.
        </p>
        <p className="text-xl">
          Passionate about delivering smooth and engaging user experiences,
          following Apple's design guidelines, and integrating modern iOS
          frameworks.
        </p>
      </>
    ),
    badge: "iOS Development",
    image: "/ios.jpg",
  },
];
