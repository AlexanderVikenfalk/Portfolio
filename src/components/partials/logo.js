import React from "react";
// import { goToTop } from "react-scrollable-anchor";

const logo = "./images/logo.svg";

export default function() {
  return (
    // <a href="#header">
    <div className="header__logoWrapper">
      <img
        src={process.env.PUBLIC_URL + logo}
        className="header__logo "
        alt="logo"
        // onClick={goToTop}
      />
    </div>
    // </a>
  );
}
