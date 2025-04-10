import React, { useEffect, useRef, useState } from "react";

const cursorColors = {
  inactive: "#282828",
  active: "#f8c70c",
};

const lerp = (start, end, amt) => start + (end - start) * amt;

const CustomCursor = ({
  isClicking = false,
  setIsClicking = () => {},
  buttonHovered = false,
  setButtonHovered = () => {},
}) => {
  const cursorRef = useRef(null);
  const borderRef = useRef(null);
  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const border = useRef({ x: 0, y: 0 });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const move = (e) => {
      const p = e.touches ? e.touches[0] : e;
      mouse.current = { x: p.clientX, y: p.clientY };
    };

    const updatePosition = (ref, x, y) => {
      if (ref.current) {
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
      }
    };

    const animate = () => {
      const { x, y } = mouse.current;

      updatePosition(cursorRef, x, y);

      border.current.x = lerp(border.current.x, x, 0.15);
      border.current.y = lerp(border.current.y, y, 0.15);
      updatePosition(borderRef, border.current.x, border.current.y);

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    document.addEventListener("mousedown", () => setIsClicking(true));
    document.addEventListener("mouseup", () => setIsClicking(false));

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("mousedown", () => {});
      document.removeEventListener("mouseup", () => {});
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  const sharedBaseStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 1000,
    willChange: "width, height, background-color, border",
  };

  const cursorStyle = {
    ...sharedBaseStyle,
    backgroundColor: isClicking ? cursorColors.active : cursorColors.inactive,
    height: isClicking ? "12px" : buttonHovered ? "8px" : "4px",
    width: isClicking ? "12px" : buttonHovered ? "8px" : "4px",
    borderRadius: "50%",
    transition:
      "width 200ms ease, height 200ms ease, background-color 200ms ease",
  };

  const borderStyle = {
    ...sharedBaseStyle,
    height: isClicking ? "12px" : buttonHovered ? "18px" : "24px",
    width: isClicking ? "12px" : buttonHovered ? "18px" : "24px",
    border: `${isClicking ? "0px" : "1px"} solid ${
      buttonHovered ? cursorColors.active : cursorColors.inactive
    }`,
    borderRadius: "50%",
    transition:
      "width 200ms ease, height 200ms ease, border 200ms ease, border-color 200ms ease",
  };

  return (
    <>
      <style>{`* { cursor: none; margin: 0; }`}</style>
      <div id="cursor" ref={cursorRef} style={cursorStyle}></div>
      <div id="cursor-border" ref={borderRef} style={borderStyle}></div>
    </>
  );
};

export default CustomCursor;
