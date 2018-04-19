import React from "react";
// import { goToTop } from "react-scrollable-anchor";

const logo = "/images/logo.svg";

export default function() {
  return (
    <div className="header__logoWrapper">
      <img
        src={process.env.PUBLIC_URL + logo}
        className="header__logo "
        alt="logo"
      />
    </div>
    // </a>
  );
}
