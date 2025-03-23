import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Destructure `pathname` from useLocation

  useEffect(() => {
    // Example: Check if the current pathname is "/portfolio"
    if (pathname === "/portfolio") {
      console.log("You are on the Portfolio page!");
    }

    // Scroll to the top of the page after a slight delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // ✅ Delay ensures smooth scrolling after page render
  }, [pathname]); // Re-run effect when pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;