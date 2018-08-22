import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import About from './About';
import App from './App';

import reducer from './reducers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router >
            <div>
                 <div className ="nav">
                   <Link to="/EditBook"><button>Сreate new</button></Link>
                   <Link to="/TableOfBooks"><button> Table of Books</button></Link>
                 </div>

                 <Route exact path="/EditBook" component={App} />
                 <Route path="/TableOfBooks" component={About}/>
            </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);