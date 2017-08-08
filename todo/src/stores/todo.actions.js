import Reflux from 'reflux';

const TodosActions = Reflux.createActions(
  [
    'getTodos',
    'addTodoToTodo',
    'deleteTodo',
    'editTodo'
  ]
);
export default TodosActions;
