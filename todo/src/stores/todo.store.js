import Reflux from 'reflux';
import TodosActions from './todo.actions';
import TodoArray from '../mocks/todos';

export default class TodoStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      todos: [],
      editable: {}
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

  getTodoById = id => {
    let editable = {};
    editable = this.state.todos.filter(todo => todo.id === parseInt(id));
    this.setState({
      editable: editable[0]
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
    let temp = [this.state.editable];
    console.log(todo)
    this.setState({
      todos: temp,
    })
    console.log(this.state.editable);
  }

}