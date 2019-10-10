export default (state = [], action = {}) => {
  switch (action.type) {
    case 'GET_DOGIMAGES':
      return [...action.payload];
    default:
      return state;
  }
};
