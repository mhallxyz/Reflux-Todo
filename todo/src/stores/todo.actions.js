import Reflux from 'reflux';

const TodosActions = Reflux.createActions(
  [
    'getTodos',
    'addTodoToTodo'
  ]
);
export default TodosActions;
