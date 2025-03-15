"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic"; // Prevents server-side rendering for this component
import styles from "../styles/Animation.module.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      splitText(); // Safely call splitText in the client
      gsap.to("svg", {
        repeat: -1,
        duration: 10,
        rotate: 360,
        ease: "steps(40)",
      });

      gsap.to("h1 span", {
        repeat: -1,
        duration: 1,
        y: () => gsap.utils.random(6, -6),
        rotate: () => gsap.utils.random(8, -8),
        scale: () => gsap.utils.random(0.8, 1.1),
        ease: "steps(2)",
        repeatRefresh: true,
        stagger: 0.1,
      });

      const scrollAnim = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          scrub: 0.6,
          toggleActions: "restart none none none",
        },
      });

      scrollAnim
        .to(`.${styles.svgbox1}`, {
          x: "50vw",
          ease: "steps(30)",
        })
        .to(
          `.${styles.svgbox2}`,
          {
            x: "-50vw",
            ease: "steps(20)",
          },
          "<"
        )
        .to(
          "h1",
          {
            y: -30,
            ease: "steps(6)",
          },
          "<"
        );
    }
  }, []);

  const splitText = () => {
    const texts = Array.from(document.querySelectorAll("[data-split]"));
    texts.forEach((item) => {
      const text = item.innerText;
      const arrSplitText = text
        .split("")
        .map((char) =>
          char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
        );
      item.innerHTML = arrSplitText.join("");
    });
  };

  return (
    <>
      <section className={`${styles.html}`}>
        <div className={`${styles.body}`}>
          <h1 className={`text-bone ${styles.h1}`} data-split>
            Hey! I'm Darya Mansouri. I'm currently studying Computer Programming
            and Analisis at George Brown college in Toronto.
          </h1>
          <div className={`${styles.svgbox} ${styles.svgbox1}`}>
            <svg
              id="svg1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 300 300"
              enableBackground="new 0 0 300 300"
              xmlSpace="preserve"
            >
              <path
                opacity="0.5"
                fill="#D83D3D"
                d="M52,47c0,0,14-30,41-21s58,93,106,101s88,86,63,111s-155,53-198-3S34,78,52,47z"
              />
            </svg>
          </div>
          <div className={`${styles.svgbox} ${styles.svgbox2}`}>
            <svg
              id="svg2"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 300 300"
              enableBackground="new 0 0 300 300"
              xmlSpace="preserve"
            >
              <path
                opacity="0.5"
                fill="#EFD050"
                d="M103,25c0,0,25-15,79-12s94,102,94,128s-13,98-50,119S91,301,71,273s-56-54-53-113 S84,32,103,25z"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
