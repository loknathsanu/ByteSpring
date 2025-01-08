import React, { useState, useEffect } from "react";
import styles from "./Navabar.module.css";
import Link from "next/link";

function Navabar() {
  const [showNavbar, setShowNavbar] = useState(true); // State to show/hide navbar
  const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down: hide navbar
      setShowNavbar(false);
    } else {
      // Scrolling up: show navbar
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, [lastScrollY]);

  return (
    <div
      className={
        showNavbar ? styles.Navabar : `${styles.Navabar} ${styles.hidden}`
      }
    >
      <nav className={styles.NavabarWeapper}>
        <span className={styles.NavabarMenu}>
          <Link href="/">Home</Link>
        </span>
        <span className={styles.NavabarMenu}>
          <Link href="#Work">Work</Link>
        </span>
        <span className={styles.NavabarMenu}>
          <Link href="/Services">Services</Link>
        </span>
        <span className={styles.NavabarMenu}>
          <Link href="/About">About</Link>
        </span>
        <span className={styles.NavabarMenu}>
          <Link href="/TalkToUs">Talk To Us</Link>
        </span>
      </nav>
      <hr className={styles.line} />
    </div>
  );
}

export default Navabar;
