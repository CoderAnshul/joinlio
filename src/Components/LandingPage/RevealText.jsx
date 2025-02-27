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

    const onScroll = (e) => {
      lenis.raf(e);
    };

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize SplitType and animations
    const splitTypes = containerRef.current.querySelectorAll(".reveal-type");

    splitTypes.forEach((element) => {
      const bgColor = element.dataset.bgColor;
      const fgColor = element.dataset.fgColor;

      const text = new SplitType(element, { types: "chars" });

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
    <div ref={containerRef} className="flex py-12 items-center min-h-[600px] ">
      <section>
        <p
          className="reveal-type @container @8xl:bg-blue-500 text-3xl leading-[12vw] xs:text-4xl xs:leading-[9vw] sm:text-5xl sm:leading-[8vw] md:text-5xl md:leading-[8vw] lg:text-6xl"
          data-bg-color="rgb(191 191 191)"
          data-fg-color="black"
        >
          The game-changing platform where students and alumni unlock global
          connections, businesses redefine engagement, and universities elevate
          student development like never before. Discover a world of
          collaboration, innovation, and boundless opportunities
        </p>
      </section>

      <section></section>
    </div>
  );
};

export default RevealText;
