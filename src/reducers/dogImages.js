const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'GET_DOGIMAGES':
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
