import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const RevealText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize SplitType and animations with word preservation
    const splitTypes = containerRef.current.querySelectorAll(".reveal-type");

    splitTypes.forEach((element) => {
      const bgColor = element.dataset.bgColor;
      const fgColor = element.dataset.fgColor;

      // Use words and chars to maintain word integrity
      const text = new SplitType(element, { 
        types: "words,chars",
        wordClass: "word-wrap",
        charClass: "char-wrap"
      });

      // Force words to stay together
      text.words.forEach(word => {
        word.style.display = "inline-block";
        word.style.whiteSpace = "nowrap";
      });

      gsap.fromTo(
        text.chars,
        {
          color: bgColor,
        },
        {
          color: fgColor,
          duration: 0.3,
          stagger: 0.02,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.killAll();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex py-12 items-center min-h-screen">
      <section className="w-full mx-auto px-4">
        <p
          className="reveal-type text-3xl lg:text-6xl font-normal"
          style={{ 
            lineHeight: 1.4,
            wordSpacing: "0.1em",
            wordBreak: "keep-all",
            hyphens: "none"
          }}
          data-bg-color="rgb(191 191 191)"
          data-fg-color="black"
        >
          The game-changing platform where students and alumni unlock global connections, businesses redefine engagement, and universities elevate student development like never before! Discover a world of collaboration, innovation, and boundless opportunities!
        </p>
      </section>
    </div>
  );
};

export default RevealText;