import React from "react";
import Fade from "react-reveal/Fade";
// import Particles from "react-particles-js";

export default function() {
  return (
    <section className="services" id="services">
      <h1 className="services__header"> SERVICES </h1>
      <ul className="services__list">
        <Fade top>
          <li className="services__list-item">
            <div className="services__list-content">
            <i className="fab fa-js fa-3x services__javascript services__icon" />
            <h3 className="services__item-header services__hover-effect">
               Frontend Development
              </h3>
              <p className="services__paragraph">
                As a web developer with a couple of years of experience I feel
                at home with <b>HTML5</b>, <b>CSS3</b> and <b>JS(ES6)</b>. Two
                frontend frameworks I really love working with are{" "}
                <b>React.js</b> and <b>Redux</b>.
              </p>
            </div>
          </li>
        </Fade>

        <Fade top>
          <li className="services__list-item">
            <div className="services__list-content">
            <i className="fas fa-mobile fa-3x services__mobile services__icon" />
           
                <h3 className="services__item-header services__hover-effect">Responsive Design</h3>

              <p className="services__paragraph">
                I always strive to make my applications deliver the same
                experience to the end user no matter if they are using a phone,
                tablet, computer or toaster. One of the techniques I often work
                with is <b>mobile first</b>.
              </p>
            </div>
          </li>
        </Fade>

        <Fade top>
          <li className="services__list-item">
            <div className="services__list-content">
            <i className="fab fa-node-js fa-3x services__node services__icon" />
              <span className="services__hover-effect">
                <h3 className="services__item-header services__hover-effect"> Backend Development</h3>
              </span>
              <p className="services__paragraph">
                For bigger systems relying on security I prefer to use the{" "}
                <b>.net</b> platform togeheter with <b> SQL </b>
                and for smaller, faster and more agile backends I like{" "}
                <b>node.js</b> together with a NoSQL database like{" "}
                <b> Mongo DB</b>.
              </p>
            </div>
          </li>
        </Fade>

        <Fade top>
          <li className="services__list-item  ">
            <div className="services__list-content">
            <i className="fas fa-recycle fa-3x services__agile services__icon" />
          
                <h3 className="services__item-header services__hover-effect">Agile Working Patterns</h3>
        
              <p className="services__paragraph">
                The nature of agile processes is very appealing to me and I
                believe that it's a good way to utilize the work power as well as
                maintaining a swift and dynamic project structure. 
              </p>
            </div>
          </li>
        </Fade>
      </ul>
    </section>
  );
}
