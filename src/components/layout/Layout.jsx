import React from "react";
import { CursorProvider } from "../../contexts/cursorState";
import CustomCursor from "../CustomCursor";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <CursorProvider>
      <div className="layout">
        <CustomCursor />
        <main className="layout__main">{children}</main>
      </div>
    </CursorProvider>
  );
};

export default Layout;
