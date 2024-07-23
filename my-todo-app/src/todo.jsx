import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: this.props.task.task
    };
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleUpdate = () => {
    this.props.updateTask(this.props.task.id, this.state.newTask);
  };

  render() {
    const { task, deleteTask, editTask } = this.props;
    return (
      <div className='Todo'>
        {task.isEditing ? (
          <input
            type='text'
            value={this.state.newTask}
            onChange={this.handleChange}
          />
        ) : (
          <p>{task.task}</p>
        )}
        <div>
        <Link to={{ pathname: `/task` }}> View Task</Link>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          {task.isEditing ? (
            <button onClick={this.handleUpdate}>Add</button>
          ) : (
            <button onClick={() => editTask(task.id)}>Edit</button>
          )}
        </div>
      </div>
    );
  }
}

export default Todo;
