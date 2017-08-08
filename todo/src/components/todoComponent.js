import React from 'react';
import Reflux from 'reflux';
import TodoActions from '../stores/todo.actions';
import uuid from 'uuid/v1';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class TodoComponent extends Reflux.Component {
  constructor(props) {
    super(props);
  }
  
  deleteTodo = data => {
    TodoActions.deleteTodo(data);
    console.log(data);
  }

  render() {
    const { data } = this.props;
    const styles = {
      TodoDiv: {
        backgroundColor: data.isDone ? '#39B54A' : '#EB5160',
        width: 500,
        color: 'white',
        padding: 10,
        marginBottom: 10
      }
    }    
    return (
      <div style={styles.TodoDiv}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <p>{moment(data.due).format('DO MMM YYY')}</p>
        <p>{data.isDone ? 'DONE' : 'GET ON IT'}</p>
        <Link to={"/edit/" + data.id}><button>Edit Todo </button></Link>
        <button
          onClick={() => this.deleteTodo(data)}
        >Delete Todo </button>
      </div>
    );
  }
}
