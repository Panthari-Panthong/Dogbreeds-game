const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_DOGSLIST':
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
