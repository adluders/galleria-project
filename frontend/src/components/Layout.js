import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <Link to="/">
          <StaticImage
            src="../images/logo.svg"
            alt="Galleria Logo"
            loading="lazy"
          />
        </Link>
        <button className="start-btn">start slideshow</button>
      </header>
      <main> {children} </main>
    </div>
  );
};

export default Layout;
