import React from "react";
import "./style.css";

const GoalsTicker = () => {
  const items = [
    "Build Once. Deploy Everywhere.\t",
    "Web, Mobile, Desktop — One Dev to Rule Them All.\t",
    "Need a stunning website or app that just works?\t",
    "Clean Code, Beautiful Interfaces, Real Results.\t",
    "From Idea to Interface — I Bring Products to Life.\t",
    "Debugging Done Right — No More Headaches.\t",
    "I Code. You Scale.\t",
    "Is your site slow or outdated? Let’s change that.\t",
    "Design-Driven. Code-Crushed. User-Focused.\t",
    "Apps That Work. Experiences That Wow.\t",
    "Got an idea? I’ll make it real — on any platform.\t",
    "Cross-Platform. Cross-Device. Seamless Experience.\t",
    "Tired of hiring multiple devs for different platforms?\t",
    "Broken Code? I’ll Fix It.\t",
    "Your Vision, Engineered to Perfection.\t",
  ];
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
