import React from 'react';
import Reflux from 'reflux';
import TodoStore from '../stores/todo.store';
import TodoActions from '../stores/todo.actions';
import Todo from '../components/todoComponent';
import AddTodoToTodo from '../components/addTodoToTodo';

export default class TodoPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.stores = [TodoStore];
    this.storeKeys = ['todos'];
    this.state = {
      pageTitle: 'Todos:'
    };
  }

  componentDidMount() {
    TodoActions.getTodos();
  }

  render = () => {
    if (!this.state.todos) {
      return false;
    }
    const { 
      todos, 
      pageTitle 
    } = this.state;
    return (
      <div className="container">
        <div className="todos">
          <h1>{pageTitle}</h1>
          {
            todos.map(todo => {
              return (
                <Todo key={todo.id} data={todo} />
              );
            })
          }
        </div>
        <div className="addtodo">
          <AddTodoToTodo />
        </div>        
      </div>        
    )
  }
}