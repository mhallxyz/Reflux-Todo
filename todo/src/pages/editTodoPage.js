import React from 'react';
import Reflux from 'reflux';

export default class EditTodoPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className='container'>
        <div className='col-md-4'>
          <h3>Edit Todo</h3>
          <input type='text' placeholder='Title' onChange={event => this.handleChange(event, 'title')} value={this.state.title} /> <br />
          <input type='text' placeholder='Description' onChange={event => this.handleChange(event, 'description')} value={this.state.description} /> <br />
          <input type='date' value={this.state.due} onChange={event => this.handleChange(event, 'due')} /> <br />
          <button
            onClick={() => this.addTodo()}
          >Edit todo</button>
        </div>
      </div>        
    );
  }
}