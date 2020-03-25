import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './Conteners/ToDoList.js'


class App extends Component {

  render(){
    return (
      <div>
        <body>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <p>
            <div>
              <ToDoList />
            </div>
          </p>
        </body>

        <footer>
            Designed with the{" "}
            <a href="https://www.vecteezy.com/">Vecteezy Editor</a>
          </footer>
          
      </div>
    );
        
  }
}

export default App;
