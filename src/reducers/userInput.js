const initialState = {
  name: 'User',
  score: 0,
  totalQuestions: 0,
  streak: 0
}



const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, name: action.payload.userName }
    default:
      return state
  }
}

export default reducer