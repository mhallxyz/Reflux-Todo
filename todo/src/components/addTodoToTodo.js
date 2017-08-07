import React from 'react';
import Reflux from 'reflux';
import TodoActions from '../stores/todo.actions';
import uuid from 'uuid/v1';

export default class AddTodoToTodo extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      due: ''
    }
  }

  addTodo() {
    const { title, description, due } = this.state;
    const newTodoToBeAddedToTodo = {
      id: uuid(),
      title: title,
      description: description,
      due: due,
      isDone: false
    };
    TodoActions.addTodoToTodo(newTodoToBeAddedToTodo);
  }

  handleChange(event, field) {
    this.setState({
      [field]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h3>ADD Todo To Todos</h3>
        <input type='text' placeholder='Title' onChange={event => this.handleChange(event, 'title')} value={this.state.title} /> <br />
        <input type='text' placeholder='Description' onChange={event => this.handleChange(event, 'description')} value={this.state.description} /> <br />
        <input type='date' value={this.state.due} onChange={event => this.handleChange(event, 'due')} /> <br />
        <button
          onClick={() => this.addTodo()}
        >Add todo to todos</button>
      </div>
    )
  }
}

  // {
  //   id: 1,
  //   title: 'Learn React!',
  //   description: 'Later',
  //   due: '01-02-2018',
  //   isDone: true
  // },