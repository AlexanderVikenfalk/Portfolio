import React, {Component} from "react";

import Main from "./main";

import Particles from "react-particles-js";

export default class App extends Component {

  render() {

    return (
      <div className="app">
        <Particles
        params={{
          particles: {
            number: {
              value: 60
            }
          }
        }}
        style={{
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "-1"
        }}
      />      
        <Main/>
      </div>
    );
  }

}
