import style from "@/component/Ourwork/Ourwork.module.css";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

function Ourworkmiddle() {
  const [scale, setScale] = useState(0.7); // Start with a smaller scale (zoom out)
  const [opacity, setOpacity] = useState(1); // Start with full opacity
  const [lastScrollY, setLastScrollY] = useState(0); // Track scroll direction
  const [inView, setInView] = useState(false); // Track if the element is in the viewport

  const elementRef = useRef(null); // Reference to the element we want to track

  // Scroll handler to detect scroll direction and adjust scale and opacity
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (inView) {
      // Scrolling down: Zoom in (increase scale) and decrease opacity
      if (currentScrollY > lastScrollY) {
        setScale((prevScale) => Math.min(1, prevScale + 0.005)); // Zoom-in effect
        setOpacity((prevOpacity) => Math.max(0.6, prevOpacity + 0.01)); // Smoothly reduce opacity to 50% as we scroll down
      } else {
        // Scrolling up: Zoom out (decrease scale) and increase opacity
        setScale((prevScale) => Math.max(0.8, prevScale - 0.005)); // Zoom-out effect
        // Smoothly restore opacity when scrolling up, but keep it below 100%
        setOpacity((prevOpacity) => Math.min(1, prevOpacity - 0.01));
      }

      setLastScrollY(currentScrollY); // Update scroll position
    }
  };

  // Intersection Observer setup to detect when the element is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set inView to true if the element is in the viewport
      },
      { threshold: 0.3 } // Trigger when at least 30% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Observe the element
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  useEffect(() => {
    // Add scroll event listener only if the element is in the viewport
    if (inView) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView, lastScrollY]);

  return (
    <div
      ref={elementRef} // Attach the reference here to track the element
      className={style.OurworkmiddleWeapper}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition:
          "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1)", // Adjusted duration and easing for both scale and opacity
        transformOrigin: "center",
      }}
    >
      <div className={style.OurworkmiddleWeapperImage}>
        <Image src="/Assest/Headerimage/ourwork1.png" fill />
      </div>
      <div className={style.OurworkmiddleWeapperConcent}>
        <h2>Safer World for All</h2>
        <p>
          Campaign Design, Campaign Strategy, Digital <br /> Strategy, UX/UI
          Design, Web Development
        </p>
      </div>
    </div>
  );
}

export default Ourworkmiddle;
