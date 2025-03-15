"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Small Business Management Console",
    link: "https://github.com/Daryamn88/Python_Assignmnets/blob/main/comp2152_assignment1.ipynb",
    thumbnail:
      "/1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
    "/2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
    "/3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
    "/4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
    "/5.png",
  },
];