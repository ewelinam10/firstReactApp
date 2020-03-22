import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class MyList extends Component{
  render(){
    return (
      <div>
        <h1> {this.props.title}</h1>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> My first component
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          </header>       

          <body>
            <div>
              <MyList title='Nowa lista'></MyList>
            </div>
          </body>
    </div>
  );
}

export default App;
