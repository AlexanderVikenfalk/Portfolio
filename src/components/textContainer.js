import React from "react";

export default function() {
  return (
    <div className="box textContainer " id="textWrapper">
      <div className="box column">
        <h2>
          <span>About me</span>
        </h2>
        <section className="excerpt">
          {/* <section className="aboutText"> */}
          <p>
            I'm a 29 year old Swedish web developer living in Berlin. I've
            worked over 4 years within the IT sector and I've recently graduated
            from a front-end program with focus on React.js with Redux as well
            as backend program with focus on C# and the .net platform. I'm
            currently looking for interesting job opportunities: full time, part
            time or freelance! I'll gladly send my resumé on request. So please
            let me know if you have any leads for me or just want to ask me
            something - You'll find my contact information below.
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
              <i className="fas fa-mobile"> </i> Responsive design (smartphone,
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
              SQL and NoSQL (Mongo DB).
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
  );
}
