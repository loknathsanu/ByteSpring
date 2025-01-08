import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // Use dist/ScrollTrigger for compatibility
import style from "@/component/Whoweare/Whoweare.module.css";
import Image from "next/image";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Whoweare = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Select the words inside the text
    const words = textRef.current.querySelectorAll("span");

    // GSAP animation for each word
    gsap.fromTo(
      words,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1, // Delay between each word
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Start the animation when 80% of the section is in view
          end: "bottom 45%", // End the animation when the section scrolls out of view
          scrub: true, // Smoothly animate based on scroll position
        },
      }
    );
  }, []);

  // Function to split text into individual words and wrap them in <span> tags
  const splitText = (text) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className={style.word}>
        {word}
      </span>
    ));
  };

  return (
    <div ref={sectionRef} className={style.Whoweare}>
      <div className={style.WhoweareLine}>
        <p>What We Do</p>
        <div className={style.lineWeapper}>
          <div className={style.line}></div>
          <div className={style.line1}></div>
        </div>
      </div>
      <div className={style.WhoweareConcent}>
        <h2 className={style.Concent} ref={textRef}>
          {splitText(
            "We are a design and development-driven agency specializing in digital innovation. Collaborating with companies and organizations, we drive transformation, foster growth, and create user-focused solutions that blend creativity, technology, and strategy to craft exceptional digital experiences and elevate your brand."
          )}
        </h2>
        <div className={style.WhoweareImage}>
          <Image src="/Assest/Headerimage/ourwork5.png" fill alt="What We Do" />
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
