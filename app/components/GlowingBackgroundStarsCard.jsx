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
    description: "Step-by-step Python learning through practical lab exercises.",
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
          <GlowingStarsDescription>{project.description}</GlowingStarsDescription>
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
    </div>
  );
}