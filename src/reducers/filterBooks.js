const initialState = '';

export default function filterBooks(state = initialState, action) {
	switch (action.type) {
        case  'FIND_BOOK':
            return action.payload;
        default:
          return state;
  }
};
   