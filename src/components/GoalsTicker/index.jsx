import React from "react";
import "./style.css";

const GoalsTicker = () => {
  const items = [];
  return (
    <>
      <div className="goals-blender" />

      <div className="goals-container">
        <div className="goals-strip">
          <div className="goals-marquee">
            {items.map((item, index) => (
              <span key={index}>{item}&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalsTicker;
