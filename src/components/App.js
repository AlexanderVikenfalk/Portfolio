import React, { Component } from 'react';
import Headline from './Headline.js'
import Main from './Main.js'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Headline />
        <Main />
     </div>
    );
  }
}

export default App;
