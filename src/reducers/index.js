import { combineReducers } from 'redux';

import Books from './Books';
import filterBooks from './filterBooks';

export default combineReducers({
  Books,
  filterBooks
});
