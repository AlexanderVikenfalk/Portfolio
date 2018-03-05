import React, { Component } from "react";
import "../styles/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar" />
        <div className="box header" id="nietzsche">
          {" "}
          <h1 className="inset-text" title="Alexander Vikenfalk">
            <span>
              Portfolio of<br />
            </span>{" "}
            Alexander Vikenfalk
          </h1>
        </div>
        <div className="box picture">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/resources/images/portraitBig.png"}
            alt="portrait Alexander Vikenfalk"
          />
        </div>
        <div className="box backgroundOnSmall" />
        <div className="overlay" />
        <div className="box textContainer " id="nietzsche">
          <div className="box column">
            <h2>
              <span>About me</span>
            </h2>
            <section className="excerpt">
              {/* <section className="aboutText"> */}
              <p>
                I'm a 29 year old Swedish web developer living in Berlin. I've
                worked over 4 years within the IT sector and I've recently
                graduated from a front-end program with focus on React.js with
                Redux as well as backend program with focus on C# and the .net
                platform. I'm currently looking for interesting job
                opportunities: full time, part time or freelance! I'll gladly
                send my resumé on request. So please let me know if you have
                any leads for me or just want to ask me something - You'll find
                my contact information below.
              </p>
            </section>
          </div>
          <div className="box column">
            {" "}
            <h2>
              <span>Skills</span>
            </h2>
            <section className="excerpt">
              <ul>
                <li>
                  <i className="fas fa-mobile" > </i> Responsive design (smartphone,
                  tablet, desktop) and cross-browser coding (Chrome, Firefox,
                  Safari, IE >9).
                </li>
                <li>
                  <i className="fab fa-js" /> Frontend programming with ES6, Jquery,
                  React.js and Redux.
                </li>
                <li>
                  <i className="fab fa-node-js" /> Backend development with the .net
                  platform and Node.js.
                </li>
                <li>
                  <i className="fas fa-database" /> Database integration with both
                  SQL and NOSQL (Mongo DB).
                </li>
                <li>
                  <i className="fas fa-server" /> Deployment to Firebase, Azure as
                  well as Linux servers.
                </li>
              </ul>
              {/* </p> */}
            </section>
          </div>
        </div>
        <footer className="box ">
          {" "}
          <ul className="social">
            <li>
            <a href="https://github.com/AlexanderVikenfalk"> <i className="link fab fa-github-square fa-4x " /> </a>
            </li>
            <li>
            <a href="https://www.xing.com/profile/Alexander_Vikenfalk/"><i className="link fab fa-xing-square fa-4x" /> </a>
            </li>
            <li>
            <a href="mailto:alexander.wikenfalk@gmail.com"> <i className=" link fas fa-envelope-square fa-4x" /> </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/alexander-vikenfalk/"> <i className="link fab fa-linkedin fa-4x " /> </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
