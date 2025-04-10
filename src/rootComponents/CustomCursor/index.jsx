import React, { useEffect, useRef, useState } from "react";

const cursorColors = {
  inactive: "#282828",
  active: "#f8c70c",
};

const lerp = (start, end, amt) => start + (end - start) * amt;

const CustomCursor = React.memo(
  ({
    isClicking = false,
    setIsClicking = () => {},
    buttonHovered = false,
    setButtonHovered = () => {},
  }) => {
    const [scrolling, setScrolling] = useState(0);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const cursorRef = useRef(null);
    const borderRef = useRef(null);
    const requestRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const border = useRef({ x: 0, y: 0 });
    const timeoutRef = useRef(null);

    useEffect(() => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );

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

      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);

      const handleWheel = (e) => {
        if (e.deltaY > 0) {
          setScrolling(1);
        } else if (e.deltaY < 0) {
          setScrolling(-1);
        }

        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setScrolling(0);
        }, 150);
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("touchmove", move);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("wheel", handleWheel);

      requestRef.current = requestAnimationFrame(animate);

      return () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("touchmove", move);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("wheel", handleWheel);
        clearTimeout(timeoutRef.current);
        cancelAnimationFrame(requestRef.current);
      };
      // eslint-disable-next-line
    }, []);

    if (isTouchDevice) return null;
    const sharedBaseStyle = {
      position: "fixed",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      zIndex: 1000,
      willChange: "width, height, background-color, border",
    };

    const isHovered = buttonHovered && !isClicking;
    const isIdle = !isClicking && !buttonHovered;

    const cursorSize = isClicking ? "12px" : isHovered ? "8px" : "4px";

    const isActive = isClicking || scrolling !== 0;
    const cursorColor = isActive ? cursorColors.active : cursorColors.inactive;

    const borderSize = (() => {
      if (scrolling !== 0) return "20px";
      if (isClicking) return "12px";
      if (isHovered) return "18px";
      return "24px";
    })();

    const borderWidth = isClicking ? "0px" : "1px";
    const borderColor = isHovered ? cursorColors.active : cursorColors.inactive;

    const defaultBorder = `${borderWidth} solid ${borderColor}`;
    const scrollingBorder = `3px dotted ${cursorColors.active}`;

    const borderTop = scrolling === 1 ? scrollingBorder : defaultBorder;
    const borderBottom = scrolling === -1 ? scrollingBorder : defaultBorder;

    const transition = "200ms ease";

    const cursorStyle = {
      ...sharedBaseStyle,
      width: cursorSize,
      height: cursorSize,
      backgroundColor: cursorColor,
      borderRadius: "50%",
      transition: `width ${transition}, height ${transition}, background-color ${transition}`,
    };

    const borderStyle = {
      ...sharedBaseStyle,
      width: borderSize,
      height: borderSize,
      border: defaultBorder,
      borderTop,
      borderBottom,
      borderRadius: "50%",
      transition: `width ${transition}, height ${transition}, border ${transition}, border-color ${transition}`,
    };

    return (
      <>
        <style>{`* { cursor: none; margin: 0; }`}</style>
        <div id="cursor" ref={cursorRef} style={cursorStyle}></div>
        <div id="cursor-border" ref={borderRef} style={borderStyle}></div>
      </>
    );
  }
);

export default CustomCursor;
