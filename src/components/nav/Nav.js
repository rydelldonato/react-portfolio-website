import React from "react";
import "./nav.css";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-div-image">
              <a href="/"><img className="nav-image" src="images/home-page-logo.png"/></a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/"><img src="images/about-logo.png"/></a>
            </li>
            <li className="nav-item">
              <a href="/"><img src="images/portfolio-logo.png"/></a>
            </li>
            <li className="nav-item">
              <a href="/"><img src="images/mail-logo.png"/></a>
            </li>
            <li className="nav-item">
              <a href="/"><img src="images/blog-logo.png"/></a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
