"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../styles/globals.css';
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    // GSAP ScrollTrigger setup
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: { className:"main-tool-bar--scrolled", targets: ".main-tool-bar" }
    });
  }, []);

  return (
    <div className="body">
      <div className="main-tool-bar bg-main">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between p-2">
            <div className="p-2 text-bone">
              Darya Mansouri
            </div>
            <div className="flex gap-4 p-2 text-bone">
              <Link href="/">Home</Link>
              <Link href="/">Projects</Link>
              <Link href="/">Courses</Link>
            </div>
            <div className="bg-mainS p-2 rounded text-bone">
              Get started
            </div>
          </div>
        </div>
      </div>
      <div className="scrollable-area">
        {/* Content here */}
      </div>
    </div>
  );
};
export default Header;
