import React, { Component } from 'react';
import ToDoItem from '../Components/ToDoItem/ToDoItem.js'

const NewToDoForm = ({onChange,onSubmit,draft}) => (
  <div>
  <input type= 'text' onChange={onChange} value={draft}/>
  <button onClick={onSubmit}>Add new task</button>
    </div>
)

class ToDoList extends Component{
  static defaultProps = {
    tasks : [
      {text:"Buy books"},
      {text:"Buy nimni cream"}
     ],
     title : 'TODO LIST'
  }
  
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
          <NewToDoForm onChange = {this.updateDraft} onSubmit = {this.addTask} draft = {draft} />
        </div>
      )
    }
  }

  export default ToDoList