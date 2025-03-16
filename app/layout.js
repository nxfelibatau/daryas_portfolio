"use client";
import "./styles/globals.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Home, FolderOpen, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    <html lang="en">
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
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-black border border-white p-2 rounded text-bone"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            {children}
          </div>
        </header>

        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-6 max-w-md w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 shadow-lg bg-black">
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
                    Name:
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
                    Email:
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
                    Message:
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
              <button
                onClick={() => setIsFormOpen(false)}
                className="mt-4 text-white text-sm underline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
