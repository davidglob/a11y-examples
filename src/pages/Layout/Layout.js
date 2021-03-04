import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { NavLink } from "react-router-dom";

import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <nav role="navigation" className="layout-container__nav">
        <Menu />
      </nav>
      <main
        id="main-content"
        tabIndex="-1"
        role="main"
        className="layout-container__main"
      >
        {children}
      </main>
    </div>
  );
};
