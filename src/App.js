import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './Conteners/ToDoList.js'


class App extends Component {

  render(){
    return(

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      
      <p><div>
            <ToDoList/>
      </div></p>

        </header> 
    )
        
  }
}

export default App;
