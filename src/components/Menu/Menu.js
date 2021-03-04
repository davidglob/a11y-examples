import React from "react";
import { NavLink } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

import "./Menu.scss";

export const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink exact={true} to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/dropdown" activeClassName="active">
          Dropdown
        </NavLink>
      </li>
      <li>
        <NavLink to="/form" activeClassName="active">
          Form
        </NavLink>
      </li>
      <li>
        <NavLink to="/images" activeClassName="active">
          Images
        </NavLink>
      </li>
      <li>
        <NavLink to="/links" activeClassName="active">
          Links
        </NavLink>
      </li>
      <li>
        <NavLink to="/modal" activeClassName="active">
          Modal
        </NavLink>
      </li>
      <li>
        <NavLink to="/roles" activeClassName="active">
          Roles
        </NavLink>
      </li>
      <li>
        <NavLink to="/selectbox" activeClassName="active">
          Select Box
        </NavLink>
      </li>
      <li>
        <NavLink to="/simplesemantic" activeClassName="active">
          Simple Semantic
        </NavLink>
      </li>
      <li>
        <NavLink to="/table" activeClassName="active">
          Table
        </NavLink>
      </li>

      <li>
        <NavLink to="/video" activeClassName="active">
          Video
        </NavLink>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0"
        >
          Official documentation
          <span className="screen-reader-new-tab">(open in new tab)</span>
          <BiLinkExternal />
        </a>
      </li>
    </ul>
  );
};
