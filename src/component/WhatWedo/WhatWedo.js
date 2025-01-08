import React, { useState } from "react";
import Image from "next/image";
import style from "@/component/WhatWedo/WhatWedo.module.css";
import { LuArrowDownLeft, LuArrowUpRight } from "react-icons/lu";

const WhatWedo = () => {
  // State to track visibility of individual sections
  const [visibleIndex, setVisibleIndex] = useState(null);

  // Data for repeating sections
  const sections = [
    {
      title: "Product Design - ",
      title1: " Web & Mobile",
      images: ["/Assest/Headerimage/ourwork4.png"],
      images1: ["/Assest/Headerimage/ourwork5.png"],
      description: "We boldly push creative boundaries with, ",
      description1: "purpose blending data-driven insights and ",
      description2: "imagination to craft innovative digital products ",
      description3: "and brands.",
      content: ["UI design", "Prototyping", "Responsive designs"],
      content2: ["Design system", "High-fidelity web designs"],
      content3: ["User flows and wireframes"],
    },
    {
      title: "(Re) branding -  ",
      title1: " Visual Identity",
      images: ["/Assest/Headerimage/ourwork4.png"],
      images1: ["/Assest/Headerimage/ourwork5.png"],
      description: "We boldly push creative boundaries with, ",
      description1: "purpose blending data-driven insights and ",
      description2: "imagination to craft innovative digital products ",
      description3: "and brands.",
      content: ["Logo design", "Brand strategy", "Typography"],
      content2: ["Color palettes", "Storytelling visuals"],
      content3: ["Guideline creation"],
    },
    {
      title: "Software   ",
      title1: " Development",
      images: ["/Assest/Headerimage/ourwork4.png"],
      images1: ["/Assest/Headerimage/ourwork5.png"],
      description: "We boldly push creative boundaries with, ",
      description1: "purpose blending data-driven insights and ",
      description2: "imagination to craft innovative digital products ",
      description3: "and brands.",
      content: ["Custom apps", "API integration", "Scalable solutions"],
      content2: ["Agile development", "Web applications"],
      content3: ["Maintenance and support"],
    },
    {
      title: "Low/No-code   ",
      title1: " Development",
      images: ["/Assest/Headerimage/ourwork4.png"],
      images1: ["/Assest/Headerimage/ourwork5.png"],
      description: "We boldly push creative boundaries with, ",
      description1: "blending data-driven insights and ",
      description2: "purpose imagination to craft innovative digital products ",
      description3: "and brands.",
      content: ["App prototyping", "Workflow automation"],
      content2: ["Quick deployment", "Custom solutions"],
      content3: ["Integrations and support"],
    },
  ];

  // Function to toggle visibility of each section
  const toggleContent = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className={style.WhatWedo}>
      <div className={style.WhatWedoLine}>
        <p>What We Do</p>
        <div className={style.lineWeapper}>
          <div className={style.line}></div>
          <div className={style.line1}></div>
        </div>
      </div>
      <h2 className={style.HeadlineContent}>
        Transforming visions into <span>reality with innovative</span>{" "}
        <span>design and development.</span>
      </h2>
      <div className={style.faqWrap}>
        <div></div>
        <div>
          {sections.map((section, index) => {
            const isCurrent = visibleIndex === index; // Check visibility for this section
            return (
              <div key={index}>
                {/* Headline and Icon */}
                <div className={style.rightSide}>
                  <hr className={style.line3}></hr>
                  <div
                    className={`${style.WhatWedoHeadline} ${style.SecondClass}`}
                  >
                    <div className={style.mainHeadline}>
                      <h2 className={style.Headline}>
                        {section.title} <span>{section.title1}</span>
                      </h2>
                    </div>
                    <div className={style.iconWrapper}>
                      {isCurrent ? (
                        <LuArrowUpRight
                          className={`${style.arrowIcon} ${style.iconRotateUp}`}
                          onClick={() => toggleContent(index)}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <LuArrowDownLeft
                          className={`${style.arrowIcon} ${style.iconRotateDown}`}
                          onClick={() => toggleContent(index)}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </div>
                  </div>
                  <hr className={style.line3}></hr>
                </div>

                {/* Conditionally render content */}
                {isCurrent && (
                  <div className={style.WhatWedoContent}>
                    <div className={style.WhatWedoImage}>
                      {section.images.map((image, imgIndex) => (
                        <div key={imgIndex} className={style.image}>
                          <Image
                            src={image}
                            fill
                            alt={`Work ${imgIndex + 1}`}
                          />
                        </div>
                      ))}
                      {section.images1.map((images1, imgIndex) => (
                        <div key={imgIndex} className={style.image1}>
                          <Image
                            src={images1}
                            fill
                            alt={`Work ${imgIndex + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className={style.conten}>
                      <div className={style.conten1}>
                        <p>{section.description}</p>
                        <p>{section.description1}</p>
                        <p>{section.description2}</p>
                        <p>{section.description3}</p>
                      </div>
                      <div className={style.contentWeapper}>
                        <div className={style.rightSideContent}>
                          {section.content.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className={style.WhatWedoRightSideContent}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className={style.rightSide1}>
                          {section.content2.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className={style.WhatWedoRightSideContent}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className={style.rightSide1}>
                          {section.content3.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className={style.WhatWedoRightSideContent}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWedo;
