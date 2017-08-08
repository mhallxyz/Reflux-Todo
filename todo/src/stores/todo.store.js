import Reflux from 'reflux';
import TodosActions from './todo.actions';
import TodoArray from '../mocks/todos';

export default class TodoStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.listenToMany(TodosActions);
  }

  getTodos() {
    let temp = [];
    TodoArray.todos.map(todo => {
      temp.push(todo);
      return true;
    })
    this.setState({
      todos: temp,
    })
  }

  addTodoToTodo = todo => {
    let temp = this.state.todos;
    temp.push(todo);
    this.setState({
      todos: temp,
    })
  }

  deleteTodo = todo => {
    let temp = this.state.todos;
    temp.splice(temp.indexOf(todo), 1);
    this.setState({
      todos: temp,
    })
    console.log(this.state.todos);
  }

  editTodo = todo => {
    let temp = this.state.todos;
    console.log(todo)
    this.setState({
      todos: temp,
    })
    console.log(this.state.todos);
  }

}