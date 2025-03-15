"use client";
import "./styles/globals.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Home, FolderOpen, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  useEffect(() => {
    // GSAP ScrollTrigger setup
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: {
        className: "main-tool-bar--scrolled",
        targets: ".main-tool-bar",
      },
    });
  }, []);
  return (
    <html lang="en" className="">
      <body className="bg-black">
        <header className="relative">
          <div className="body">
            <div className="main-tool-bar bg-black border border-b-white">
              <div className="container mx-auto">
                <div className="flex flex-wrap justify-between p-2">
                  <div className="p-2 text-bone">Darya Mansouri</div>
                  <div className="flex gap-4 p-2 text-bone">
                    <Link className="hidden md:block" href="/">
                      Home
                    </Link>
                    <Link className="block md:hidden" href="/">
                      <Home size={24} />
                    </Link>
                    <Link className="hidden md:block" href="/projects">
                      Projects
                    </Link>
                    <Link className="block md:hidden" href="/projects">
                      <FolderOpen size={24} />
                    </Link>
                    <Link className="hidden md:block" href="/about">
                      About
                    </Link>
                    <Link className="block md:hidden" href="/about">
                      <User size={24} />
                    </Link>
                  </div>
                  <div className="bg-black border border-white p-2 rounded text-bone">
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
