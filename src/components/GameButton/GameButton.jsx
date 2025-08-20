import React from "react";
import "./GameButton.css";

function shadeColor(color, percent) {
  // darkens/lightens hex colors
  let f = parseInt(color.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  return (
    "#" +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}

const GameButton = ({ color = "#87CEFA", children }) => {
  const darker = shadeColor(color, -0.2); // 20% darker

  return (
    <div
      className="btn-hole"
      style={{
        backgroundColor: darker,
      }}
    >
      <div
        className="btn-top-surface"
        style={{
          backgroundColor: color,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GameButton;
