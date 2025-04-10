import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CHARACTERS = "QWERTYUIOPASDFGHJKLZXCVBNM#@$&1234567890";

const getRandomLetter = () => {
  const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
  return CHARACTERS.charAt(randomIndex);
};

const CustomSectionOneBackground = React.memo(
  ({ onMouseEnter = () => {}, onMouseLeave = () => {} }) => {
    const [count, setCount] = useState(0);
    const [letters, setLetters] = useState([]);
    const spanRef = useRef(null);

    const updateCount = () => {
      if (spanRef.current) {
        const spanHeight = spanRef.current.offsetHeight;
        const spanWidth = spanRef.current.offsetWidth;
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;

        const numSpans =
          Math.ceil(screenHeight / spanHeight) *
          Math.ceil(screenWidth / spanWidth);
        setCount(numSpans);
      }
    };

    useEffect(() => {
      updateCount();
      let resizeTimeout;

      const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateCount, 100);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      const generatedLetters = Array.from({ length: count }, getRandomLetter);
      setLetters(generatedLetters);
    }, [count]);

    return (
      <>
        <div className="bgWrapS1">
          <span ref={spanRef} className="bgletterS1">
            S
          </span>
          {letters.map((char, i) => (
            <span key={i} className="bgletterS1">
              {char}
            </span>
          ))}
        </div>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="emailWrap"
        >
          khalifasafvan@yahoo.com
        </div>
      </>
    );
  }
);

export default CustomSectionOneBackground;
