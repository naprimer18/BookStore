export default function deleteBooks(state = [], action) {
   if (action.type === 'DELETE_BOOK') {
    return [
      ...state,
      state.pop() // постараюсь пофиксить 
    ];
  } 
    return state;
}