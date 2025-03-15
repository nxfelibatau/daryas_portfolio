"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

const projects = [
  {
    title: "Small Business Management Console",
    description:
      "A console-based program for managing personnel and inventory, handling employee transactions, and more.",
    link: "https://github.com/Daryamn88/Python_Assignmnets/blob/main/comp2152_assignment1.ipynb",
  },
  {
    title: "Console Games and Quadratic Challenges",
    description:
      "An educational console-based game with arithmetic challenges and quadratic equation solvers.",
    link: "https://github.com/Daryamn88/Python_Assignmnets/blob/main/Assignment_02.ipynb",
  },
  {
    title: "SimpleCart Online Store",
    description:
      "A Python-based online store with product browsing, checkout processing, and SQLite database support.",
    link: "https://github.com/Daryamn88/Python_Assignmnets/blob/main/term_project.ipynb",
  },
  {
    title: "Python Labs",
    description:
      "Step-by-step Python learning through practical lab exercises.",
    link: "https://github.com/Daryamn88/COMP2152",
  },
  {
    title: "C# In Class Exercise",
    description:
      "A web app built with C#, Bootstrap, and AJAX for interactive user experience and security optimization.",
    link: "https://github.com/Daryamn88/ICE",
  },
];

export default function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <GlowingStarsBackgroundCard key={index}>
          <GlowingStarsTitle>{project.title}</GlowingStarsTitle>
          <GlowingStarsDescription>
            {project.description}
          </GlowingStarsDescription>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline block mt-2"
          >
            View Project
          </a>
        </GlowingStarsBackgroundCard>
      ))}
      <div className="p-6 max-w-md max-h-[27rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 shadow-lg">
        <h2 className="text-xl font-bold text-white">Contact</h2>
        <p className="text-sm text-gray-200">
          Here is how you can contact me!
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Daryamn88"
            className="text-blue-400 underline transition"
          >
            <i className="fab fa-github fa-shake"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/darya-mansouri-35b705267"
            className="text-blue-400 underline transition"
          >
            <i className="fa-brands fa-linkedin"></i> Linkedin
          </a>
        </div>
        <form
          action="https://formspree.io/f/mnqeowwg"
          method="POST"
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white text-sm">
              <i className="fa-solid fa-circle-user"></i> Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 rounded-md bg-white text-gray-800 outline-none border-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white text-sm">
              <i className="fas fa-envelope"></i> Email:
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="p-2 rounded-md bg-white text-gray-800 outline-none border-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white text-sm">
              <i className="fa-solid fa-message"></i> Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="p-2 rounded-md bg-white text-gray-800 outline-none border-none h-24 resize-none"
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_subject"
            value="New submission from your website!"
          />

          <button
            type="submit"
            className="mt-2 p-2 rounded-lg bg-transparent border border-white hover:text-black text-white font-semibold hover:bg-white transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
