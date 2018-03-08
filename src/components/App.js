import React, { Component } from "react";
import "../styles/app.css";

import MainContainer from './mainContainer.js'


export default class App extends Component {
  render() {
    return (
      <MainContainer />
      // <div className="wrapper">

      //   <div className="box backgroundOnSmall" />
      //   <div className="overlay" />

      //   <footer className="box ">
      //     {" "}
      //     <ul className="social">
      //       <li>
      //       <a href="https://github.com/AlexanderVikenfalk"> <i className="link fab fa-github-square fa-4x " /> </a>
      //       </li>
      //       <li>
      //       <a href="https://www.xing.com/profile/Alexander_Vikenfalk/"><i className="link fab fa-xing-square fa-4x" /> </a>
      //       </li>
      //       <li>
      //       <a href="mailto:alexander.wikenfalk@gmail.com"> <i className=" link fas fa-envelope-square fa-4x" /> </a>
      //       </li>
      //       <li>
      //       <a href="https://www.linkedin.com/in/alexander-vikenfalk/"> <i className="link fab fa-linkedin fa-4x " /> </a>
      //       </li>
      //     </ul>
      //   </footer>
      // </div>
    );
  }
}
