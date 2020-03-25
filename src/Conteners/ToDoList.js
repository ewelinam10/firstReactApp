import React, { Component } from 'react';
import ToDoItem from '../Components/ToDoItem/ToDoItem.js'
import styled from 'styled-components'

const Title = styled.h1`
font-family: 'Josefin Sans', sans-serif;
`;

const Container =styled.div`
  background-color: #303238;
  padding : 50px;
  border-radius: 20%;
`;

const TextInput = styled.input`
  border: 2px solid white;  
  padding: 10px;
  box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 10px  rgb(142, 221, 135);
  background:  #4a4d53;
  font-size : 20px;
  color : rgb(252, 255, 78);
`

const NewToDoForm = ({onChange,onSubmit,draft}) => (
  <div>
  <TextInput type= 'text' onChange={onChange} value={draft}/>
  <button onClick={onSubmit}>Add new task</button>
    </div>
)



class ToDoList extends Component{
  static defaultProps = {
    tasks : [
      {text:"Eat pizza"},
      {text:"Watch hotel paradise"},
      {text:"Hug"}
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
        <Container>
          <Title> {title}</Title>
          {tasks.map(task => 
          <ToDoItem task={task}></ToDoItem>
          )}
          <NewToDoForm onChange = {this.updateDraft} onSubmit = {this.addTask} draft = {draft} />
        </Container>
      )
    }
  }

  export default ToDoList