const initialState = {
  name: 'User',
  score: 0,
  totalQuestions: 0,
  streak: 0,
  value: 0
}



const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, name: action.payload.userName }
      case 'SELECT_ANSWER':
     return { ...state, value: action.payload }
    case 'CORRECT_ANSWER':
      return {...state, name: action.payload.name}
    case 'WRONG_ANSWER':
      return {...state}
    default:
      return state
  }
}

export default reducer
