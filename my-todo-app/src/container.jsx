import React, { Component } from 'react';
import TodoForm from './todoentry';
import Todo from './todo';
import { v4 as uuidv4 } from 'uuid';


class ToDoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTask = (task) => {
    const newTask = {
      id: uuidv4(),
      task,
      completed: false,
      isEditing: false
    };
    this.setState({ todos: [...this.state.todos, newTask] });
  };

  deleteTask = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  editTask = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    });
  };

  updateTask = (id, updatedTask) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
      )
    });
  };

  render() {
    return (
      <div className='todocontainer'>
        <h1>My To-do List</h1>
        <TodoForm addTodo={this.addTask} />
        {this.state.todos.map((todo, index) => (
          <Todo
            task={todo}
            key={index}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            updateTask={this.updateTask}
          />
        ))}
      </div>
    );
  }
}

export default ToDoContainer;
