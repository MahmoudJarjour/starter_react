import React, { Component } from 'react';
import './App.css';
import TeamHeader from './TeamComponent/TeamHeader'
import Team from './TeamComponent/Team'

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
