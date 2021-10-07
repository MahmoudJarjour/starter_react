import React, { Component } from 'react';
import './App.css';
import Team from './TeamComponent/Team';
import TeamHeader from './TeamComponent/TeamHeader';


  class App extends Component {
    render(){
        return (
          <div className="container">
            
            <div>
              <TeamHeader />
              <Team />
            </div>
            
            
          </div>
          
      );
   }
  }

export default App;
