const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_RIGHT_ANSWER':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
