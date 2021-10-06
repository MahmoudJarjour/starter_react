import React, { Component } from 'react';

import Header from './Components/Header';
import './App.css';
import Social from './Components/Social';
import Text from './Components/Text';


  class App extends Component {
    render(){
        return (
          <div className="container">
            <Header />
            <Text />
            <Social />
            
          </div>
          
      );
   }
  }

export default App;
