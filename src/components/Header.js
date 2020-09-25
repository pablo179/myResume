import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import imageProfile from "../assets/images/imageProfile.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__hexagon--border">
          <div className="header__hexagon__source--container">
            <img
              src={imageProfile}
              alt="profileImage"
              className="header__hexagon__source"
            />
          </div>
        </div>
        <div className="header__text-container">
          <h1 className="header__title">Pablo David Castillo Morales</h1>
          <p className="header__quote">
            “Soy un programador en desarrollo, amante del codigo, los stickers,
            el auto aprendizaje, los videojuegos y la innovación tecnológica”
          </p>
        </div>
      </div>
      <nav className="header__nav">
        <a
          className="header__nav__item"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: cm.pablo.prog@gmail.com"
        >
          <div className="nav__item__circle">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          cm.pablo.prog@gmail.com
        </a>
        <a
          className="header__nav__item"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/pablo179"
        >
          <div className="nav__item__circle">
            <FontAwesomeIcon icon={faGithubAlt} />
          </div>
          /pablo179
        </a>
        <a
          className="header__nav__item"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/pablo-david-castillo-morales-53a639183/"
        >
          <div className="nav__item__circle">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          /pablo-david-castillo
        </a>
        <a
          className="header__nav__item"
          href="../assets/pdf/cvPablo.pdf"
          download
        >
          <div className="nav__item__circle--curriculum">
            <FontAwesomeIcon
              icon={faDownload}
              style={{ paddingRight: "5px", fontSize: "24px" }}
            />
            Curriculum
          </div>
        </a>
      </nav>
    </header>
  );
}
export default Header;
