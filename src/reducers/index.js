import { combineReducers } from 'redux';

import Books from './Books';
import filterBooks from './filterBooks';
import deleteBooks from './deleteBooks';

export default combineReducers({
  Books,
  filterBooks,
  deleteBooks
});
