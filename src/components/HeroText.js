
"use client"; // This makes HeroText a client component

import React, { useState, useEffect } from "react";

const HeroText = () => {
  const [currentText, setCurrentText] = useState("Full Stack Engineer");
  const phrases = ["An Engineer", "a great chef!", "cinephile", "Fitness freak"];
  const delay = 2000; // Change text every 2 seconds

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % phrases.length; // Loop through the array
      setCurrentText(phrases[index]);
    }, delay);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <span
      className="
        font-inter 
        font-extrabold 
        tracking-wide 
        text-3xl       /* mobile */
        sm:text-4xl    /* small screens */
        md:text-6xl    /* tablets */
        lg:text-7xl    /* laptops */
        xl:text-8xl    /* big desktops */
        leading-tight md:leading-[90px] lg:leading-[100px]
        text-color_h1
      "
    >
      {currentText}
    </span>
  );
};

export default HeroText;
