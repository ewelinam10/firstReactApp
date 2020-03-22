import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class MyList extends Component{
  state = {
    tasks: this.props.tasks,
    draft : ''
  }

  updateDraft = (event) => {
    this.setState({draft : event.target.value})
  }

  addTask = () => {
    let newTasks = this.state.tasks;
    newTasks.push(this.state.draft);
    this.setState({tasks : newTasks, draft : ''})
  }

  render(){
    return (
      <div>
        <h1> {this.props.title}</h1>
        {this.state.tasks.map(task => 
        <div><p> {task}</p></div>
        )}
        <input type= 'text' onChange={this.updateDraft} />
        <button onClick={this.addTask}>Add new task</button>
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
