"use client"
import "./styles/globals.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  useEffect(() => {
    // GSAP ScrollTrigger setup
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: { className:"main-tool-bar--scrolled", targets: ".main-tool-bar" }
    });
  }, []);
  return (
    <html lang="en" className="">
      <body className="bg-black">
        <header className="relative">
          <div className="body">
            <div className="main-tool-bar bg-main">
              <div className="container mx-auto">
                <div className="flex flex-wrap justify-between p-2">
                  <div className="p-2 text-bone">Darya Mansouri</div>
                  <div className="flex gap-4 p-2 text-bone">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>
                  </div>
                  <div className="bg-mainS p-2 rounded text-bone">
                    Get started
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>
        </header>
      </body>
    </html>
  );
}
