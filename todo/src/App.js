import React, { Component } from 'react';
import TodoPage from './pages/todoPage';
import EditTodoPage from './pages/editTodoPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <ul>
          <li><Link to="/">TodoPage</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={TodoPage}/>
        <Route exact path="/edit" component={EditTodoPage}/>
        <Route path="/edit/:todoid" component={EditTodoPage}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
