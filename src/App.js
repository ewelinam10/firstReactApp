import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var classNames = require('classnames');
class ToDoItem extends Component{
  static defaultProps = {
    done : false
  }

state = {
  done : this.props.done
}
changeStateOfTask = (event) => {
this.setState({done : !this.state.done})
}

  render(){
    const {text} = this.props.task;
    var classes = classNames({
      'task' : true,
      'done' : this.state.done
    });
    return (
      
      <div clas className = {classes}>
      <p><input type="checkbox" onChange={this.changeStateOfTask}/></p>
      <p> {text}</p>
      </div>
    )
  }
}
class ToDoList extends Component{
  state = {
    tasks: this.props.tasks,
    draft : ''
  }

  updateDraft = (event) => {
    this.setState({draft : event.target.value})
  }

  addTask = () => {
    const { tasks, draft } = this.state
    const newTasks = tasks
    newTasks.push({text:this.state.draft});
    this.setState({tasks : newTasks, draft : ''})
  }

  render(){
    const title = this.props.title
    const { tasks, draft }  = this.state
    return (
      <div>
        <h1> {title}</h1>
        {tasks.map(task => 
        <ToDoItem task={task}></ToDoItem>
        )}
        <input type= 'text' onChange={this.updateDraft} value={draft}/>
        <button onClick={this.addTask}>Add new task</button>
      </div>
    )
  }
}


class App extends Component {
 myTasks = [
  {text:"Buy books"},
  {text:"Buy nimni cream"}
 ]
  render(){
    return(

      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      <div>
            <ToDoList title='TODO' tasks={this.myTasks}></ToDoList>
          </div>
      </p>

        </header> 
    )
        
  }
}

export default App;
