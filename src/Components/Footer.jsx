import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "" : "fire-img")}
      >
        <img className="footer_page_logo" src="./images/page1.png" alt="image2" />
      </NavLink>
      <NavLink
        to="/page2"
        className={({ isActive }) => (isActive ? "" : "fire-img")}
      >
        <img className="footer_page_logo" src="./images/page2.png" alt="image2" />
      </NavLink>
      <NavLink
        to="/page3"
        className={({ isActive }) => (isActive ? "" : "fire-img")}
      >
        <img className="footer_page_logo" src="./images/page3.png" alt="image2" />
      </NavLink>
      <NavLink
        to="/page4"
        className={({ isActive }) => (isActive ? "" : "fire-img")}
      >
        <img className="footer_page_logo" src="./images/page4.png" alt="image2" />
      </NavLink>
    </div>
  );
};

export default Footer;
