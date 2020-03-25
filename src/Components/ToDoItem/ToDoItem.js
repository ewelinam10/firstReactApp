import React, { Component } from 'react';
import styled from 'styled-components'

const TaskName = styled.p`
font-style : italic;
`;

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
        
        <div className = {classes}>
        <p><input type="checkbox" onChange={this.changeStateOfTask}/></p>
        <TaskName> {text}</TaskName>
        </div>
      )
    }
  }

  export default ToDoItem