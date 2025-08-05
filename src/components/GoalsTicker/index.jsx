import React from "react";
import { portfolioConfig } from "../../config/portfolio";
import "./style.css";

const GoalsTicker = () => {
  const { goalsTicker } = portfolioConfig;

  return (
    <>
      <div className="goals-blender" />

      <div className="goals-container">
        <div className="goals-strip">
          <div className="goals-marquee">
            {goalsTicker.items.map((item, index) => (
              <span key={index}>{item}&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalsTicker;
