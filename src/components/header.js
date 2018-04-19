import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import Logo from "./partials/logo";

export default function() {
  return (
    <div className="header">
    

      <Logo />
      <div className="header__container">
      <div className="header__container-inner">
        <Fade top>
          <h5 className="header__smallText">
            <span>Alexander Vikenfalk</span>
          </h5>
        </Fade>
        <Zoom>
          <h1 className="header__bigText">
            <span>Web Developer</span>
          </h1>
        </Zoom>
        <Fade bottom>
          <h5 className="header__smallText">
            <span>Based in</span> Berlin
          </h5>
        </Fade>
      </div>
      </div>

      <Fade>
        <div className="header__arrow-container">
          <div className="header__arrow-outer">
            <a href="#profile">
              <div className="header__arrow-inner">
                <div className="header__arrow-element" />
                <div className="header__arrow-element" />
                <div className="header__arrow-element" />
              </div>
            </a>
          </div>
        </div>
      </Fade>
     
    </div>
  );
}
