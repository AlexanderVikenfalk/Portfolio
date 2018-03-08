import React from "react";

import TextContainer from "./textContainer.js";

export default function() {
  return (
    <footer className="box ">
      {" "}
      <ul className="social">
        <li>
          <a href="https://github.com/AlexanderVikenfalk">
            {" "}
            <i className="link fab fa-github-square fa-4x " />{" "}
          </a>
        </li>
        <li>
          <a href="https://www.xing.com/profile/Alexander_Vikenfalk/">
            <i className="link fab fa-xing-square fa-4x" />{" "}
          </a>
        </li>
        <li>
          <a href="mailto:alexander.wikenfalk@gmail.com">
            {" "}
            <i className=" link fas fa-envelope-square fa-4x" />{" "}
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alexander-vikenfalk/">
            {" "}
            <i className="link fab fa-linkedin fa-4x " />{" "}
          </a>
        </li>
      </ul>
    </footer>
  );
}
