import React, { Component } from 'react';
import Headline from './Headline.js'
import Main from './Main.js'
import '../styles/App.css';
import Clearfix from 'react-clearfix';

class App extends Component {
  render() {
    return (
      <div>
        <Clearfix />
        <Headline />
        <Main />
     </div>
    );
  }
}

export default App;
