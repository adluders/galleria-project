import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <StaticImage
          src="../images/logo.svg"
          alt="Galleria Logo"
          loading="lazy"
        />
        <button className="start-btn">start slideshow</button>
      </header>
      <main> {children} </main>
    </div>
  );
};

export default Layout;
