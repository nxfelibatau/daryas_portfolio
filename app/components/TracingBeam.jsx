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
              Cups & Cookies - Capstone Project
            </h2>

            <p className={twMerge("text-2xl font-semibold text-white mb-4")}>{item.title}</p>

            <div className="text-sm text-white prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="Project Thumbnail"
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

      {/* ✅ Resume & Cover Letter Download Section */}
      <div className="mt-44 flex flex-col items-center">
        <p className="text-3xl text-bone">Resume</p>
        <p className="text-xl mt-2 text-center text-bone">
          Download my resume to learn more about my professional background and experiences.
        </p>
        <a href="/Final_resume.pdf" download>
          <button className="px-4 hover:bg-black m-5 py-2 bg-white text-black rounded-lg hover:text-white font-semibold bg-transparent border border-white transition">
            Download Resume
          </button>
        </a>
        <p className="text-3xl text-bone mt-5">Cover Letter</p>
        <p className="text-xl mt-2 text-center text-bone">
          Download my cover letter to learn more about my qualifications and motivation.
        </p>
        <a href="/Coverletter.docx" download>
          <button className="px-4 hover:bg-black m-5 py-2 bg-white text-black rounded-lg hover:text-white font-semibold bg-transparent border border-white transition">
            Download Cover Letter
          </button>
        </a>
      </div>

      <div className="bg-black mt-20">
        <Link href="/projects" className={`flex justify-center mb-10 text-bone Link`}>
          Click to continue
        </Link>
      </div>
    </TracingBeam>
  );
}

// ✅ Professionally written project details with one consistent badge
const dummyContent = [
  {
    title: "Project Overview",
    description: (
      <>
        <p className="text-xl">
          The <b>Cups & Cookies</b> project is an innovative web application designed to bring the café experience to 
          your home. It provides a variety of <b>pastry recipes, coffee brewing tutorials, and e-commerce integration</b> 
          for purchasing café tools. Users can explore new recipes, learn barista skills, and even order 
          essential coffee-making products.
        </p>
        <p className="text-xl mt-3">
          This project is developed using <b>React (frontend), Node.js/Express (backend), MongoDB (database), and Docker</b>, 
          ensuring a modern, scalable, and efficient system. The goal is to make specialty coffee accessible to everyone 
          while reducing the cost of café visits.
        </p>
      </>
    ),
    image: "/javascript.jpg",
  },
  {
    title: "Project Vision",
    description: (
      <>
        <p className="text-xl">
          The project vision document outlines the purpose, goals, and expected impact of the <b>Cups & Cookies</b> application.
          It highlights how this platform will transform the way people enjoy coffee at home by providing valuable learning
          resources and product recommendations.
        </p>
        <a href="/F24_T61_Project_Vision_Template.docx" download>
          <button className="px-4 hover:bg-black m-5 py-2 bg-white text-black rounded-lg hover:text-white font-semibold bg-transparent border border-white transition">
            Download Project Vision
          </button>
        </a>
      </>
    ),
  },
  {
    title: "Requirements Analysis & Design",
    description: (
      <>
        <p className="text-xl">
          This document details the functional and non-functional requirements of the project. It provides a 
          structured breakdown of the system architecture, user roles, and expected features.
        </p>
        <a href="/COMP3059-F24-Requirements_Analysis_Design.docx" download>
          <button className="px-4 hover:bg-black m-5 py-2 bg-white text-black rounded-lg hover:text-white font-semibold bg-transparent border border-white transition">
            Download Requirements Analysis
          </button>
        </a>
      </>
    ),
  },
  {
    title: "Wireframes & Mockups",
    description: (
      <>
        <p className="text-xl">
          The UI/UX design plays a crucial role in user engagement. Explore the interactive wireframes and mockups that 
          showcase the visual layout and navigation experience of the <b>Cups & Cookies</b> web application.
        </p>
        <a href="https://www.figma.com/design/9YsG83Thgl3QSczPLOQ1gc/Capstone-mockup?node-id=0-1&p=f&t=twnSYhv507a9zfFL-0" target="_blank" className="text-blue-400">
          View Wireframes on Figma
        </a>
      </>
    ),
  },
  {
    title: "Sprint Backlog",
    description: (
      <>
        <p className="text-xl">
          Agile development tracking with a detailed Sprint Backlog to monitor progress and priorities.
        </p>
        <a href="/Sprint_Backlog_T61.docx" download>
          <button className="px-4 hover:bg-black m-5 py-2 bg-white text-black rounded-lg hover:text-white font-semibold bg-transparent border border-white transition">
            Download Sprint Backlog
          </button>
        </a>
      </>
    ),
  },
];
