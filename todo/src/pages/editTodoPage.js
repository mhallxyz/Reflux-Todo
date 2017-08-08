import React from 'react';
import Reflux from 'reflux';
import moment from 'moment';
import TodoStore from '../stores/todo.store';
import TodoActions from '../stores/todo.actions';

export default class EditTodoPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [TodoStore];
    this.storeKeys = ['editable'];
  }

  componentDidMount() {
    TodoActions.getTodoById(this.props.match.params.todoid);
  }
  
  render() {
    if (!this.state.editable) {
      return false;
    }
    const { 
      editable
    } = this.state;
    return(
      <div className='container'>
        <div className='col-md-4'>
          <h3>Edit Todo</h3>
          <input type='text' placeholder='Title' onChange={event => this.handleChange(event, 'title')} value={editable.title} /> <br />
          <input type='text' placeholder='Description' onChange={event => this.handleChange(event, 'description')} value={editable.description} /> <br />
          <input type='text' value={editable.due} onChange={event => this.handleChange(event, 'due')} /> <br />
          <button
            onClick={() => TodoActions.editTodo(editable)}
          >Update todo</button>
        </div>
      </div>        
    );
  }
}