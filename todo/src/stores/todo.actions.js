import Reflux from 'reflux';

const TodosActions = Reflux.createActions(
  [
    'getTodos',
    'addTodoToTodo',
    'deleteTodo',
    'editTodo',
    'getTodoById'
  ]
);
export default TodosActions;
