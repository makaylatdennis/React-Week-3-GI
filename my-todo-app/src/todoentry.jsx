import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <form className='TodoForm' onSubmit={this.handleSubmit}>
        <input
          type="text"
          className='todo-entry'
          value={this.state.task}
          placeholder='Enter a task!'
          onChange={this.handleChange}
        />
        <button type='submit' className='add-btn'>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
