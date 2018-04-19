import React, { Component } from "react";
import Slide from 'react-reveal/Slide';

export default class footer extends Component {
  renderIcons = (url, icon) => {
    return (
      <li className="social__list-item">
        <a href={url} className="social__anchor-tag">
          {" "}
          <i className={`social__link fab fa-4x  ${icon}`} />
        </a>
      </li>
    );
  };

  render() {
    return (
      <Slide bottom>
      <footer id="social" className="social">
        <div className="social__row">
          <ul className="social__list">
              
            {this.renderIcons(
              "https://github.com/AlexanderVikenfalk",
              "fa-github-square"
            )}
            {this.renderIcons(
              "https://www.xing.com/profile/Alexander_Vikenfalk/",
              "fa-xing-square"
            )}
            {this.renderIcons(
              "https://www.linkedin.com/in/alexander-vikenfalk/",
              "fa-linkedin"
            )}
          </ul>
        </div>
      </footer>
      </Slide>
    );
  }
}
