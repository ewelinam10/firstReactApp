import React, { Component } from 'react';
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
        <p> {text}</p>
        </div>
      )
    }
  }

  export default ToDoItem