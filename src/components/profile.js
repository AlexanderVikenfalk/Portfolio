import React from "react";
import Fade from "react-reveal/Fade";

const resume = "/cv/resume.pdf";

export default function() {
return (
    <div className="profile" id="profile">
    <Fade left>
      <div className="profile__text-container-outer">
        <div className="profile__text-container-inner">
          <h2 className="profile__heading">
            Hello!<span className="profile__heading-highlighted"> I'm Alex</span>
          </h2>
          <p className="profile__paragraph">
          I'm a 29-year-old Swedish web developer living in Berlin. My earlier
            jobs included: forklift driving, handing out flyers while dressed as
            Peter Pan, putting on bottle caps on oil bottles and packaging
            sausages at a sausage factory. But now I've given up my dream to
            work at a sausage factory again and instead decided to pursue a
            career in frontend development.
  
          </p>
          <p className="profile__paragraph">
          <br />
          I've worked over 4 years within the IT sector and I've recently
            graduated from a front-end program with focus on React.js with Redux
            as well as backend program with focus on C# and the .NET platform.
         
          </p>
          <p className="profile__paragraph">
            <br />
            I'm currently looking for interesting job opportunities: preferably fulltime within frontend! 
            Click my resumé below to find out more. And please let me
            know if you have any leads for me or just want to ask me something -
            You'll find my contact information below.
          </p>
        </div>
        <div className="profile__link-container">
          <div className="profile__contact-link-wrapper">
            {" "}
            <a className="profile__contact-link" href="#social">
              Hire Me
            </a>{" "}
          </div>
          <div className="profile__resume-link-wrapper">
            {" "}
            <a href={process.env.PUBLIC_URL + resume}>Resume</a>
          </div>
        </div>
      </div>
      </Fade>

      <Fade right>
      <div className="profile__picture-container-outer">
   
        <div className="profile__picture-container-inner"> </div>
      </div>
      </Fade>
    </div>
  );
}
