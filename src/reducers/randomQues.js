const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'GET_RANDOM':
      return action.payload
    default:
      return state
  }
}


export default reducer