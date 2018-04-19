import React, { Component } from "react";

import Header from "./header";
import Profile from "./profile";
import Services from "./services";
import Footer from "./footer";

import Fade from "react-reveal/Fade";


import "../styles/app.css";

export default class Main extends Component {



  render() {

    console.log('main')
    return (
      <Fade>
        
      <div className="main">
                <Header />
                <Profile />                
                <Services /> 
        <Footer  />  
      </div>
      </Fade>
    );
  }
}
