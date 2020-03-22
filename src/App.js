import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class MyList extends Component{
  render(){
    return (
      <div>
        <h1> {this.props.title}</h1>
        {this.props.tasks.map(task => 
        <div><p> {task}</p></div>
        )}
      </div>
    )
  }
}
class App extends Component {
 myTasks = [
   "Buy books",
   "Buy nimni cream"
 ]
  render(){
    return(

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      <div>
            <MyList title='TODO' tasks={this.myTasks}></MyList>
          </div>
      </p>

        </header> 
    )
        
  }
}

export default App;
