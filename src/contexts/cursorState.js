// cursorContext.js
import { createContext, useState } from "react";

const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <CursorContext.Provider
      value={{ isClicking, buttonHovered, setIsClicking, setButtonHovered }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export { CursorProvider, CursorContext };
