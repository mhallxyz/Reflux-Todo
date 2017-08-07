import React from 'react';
import Reflux from 'reflux';
import moment from 'moment';

export default class TodoComponent extends Reflux.Component {
  constructor(props) {
    super(props);
  }
  
  deleteTodo = event => {

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
        <button
          onClick={event => this.deleteTodo(event)}
        >Delete Todo </button>
      </div>
    );
  }
}
