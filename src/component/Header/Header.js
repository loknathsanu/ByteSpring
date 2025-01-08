import React from "react";
import style from "@/component/Header/Header.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

function Header() {
  return (
    <div className={style.Header}>
      <h1>ByteSpring</h1>
      <div className={style.HeaderWeapper}>
        {" "}
        <div className={style.HeaderContent}>
          <div className={style.contentWrapper}>
            <h2>
              Got a Vision? <br /> Let’s Bring It to Life!{" "}
            </h2>
            <p>
              We create modern, user-focused websites that enhance experiences,
              drive growth, and help brands achieve success <br /> in the
              digital world.
            </p>
          </div>
          <div className={style.Headerbtn}>
            <p>Let’s start working together! </p>
            <hr className={style.line} />
            <FaArrowRight />
          </div>
        </div>
        <div className={style.HeaderImage}>
          <Image
            src="/Assest/Headerimage/Headerimage.png"
            fill
            alt="HeaderImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
