// GSAP.jsx
import { useEffect } from "react";
import gsap from "gsap";

const GSAP = () => {
  useEffect(() => {
    gsap.from(".fade-in", {
        // instead of opacity
      y: 20,
      duration: 1.2,
      // stagger: 0.3,
      ease: "power4.out"
    });
  }, []);

  return null;
};

export default GSAP;
