import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import Paragraph from './Components/Paragraph';
import './App.css';


  class App extends Component {
    render(){
        return (
          <div>
            <TodoList />
            <Paragraph />
          </div>
          
      );
   }
  }

export default App;
