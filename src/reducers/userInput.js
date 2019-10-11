const initialState = {
  name: 'User',
  score: 0,
  totalQuestions: 0,
  value: 0,
  correct: true
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, name: action.payload.userName };
    case 'SELECT_ANSWER':
      return { ...state, value: action.payload.value };
    case 'CORRECT_ANSWER':
      return { ...state, correct: action.payload.correct };
    case 'SELECTRIGHT_ANSWER':
      return {
        ...state, score: state.score + action.payload.score, totalQuestions: state.totalQuestions + action.payload.totalQuestions
      };
    case 'SELECTWRONG_ANSWER':
      return {
        ...state, totalQuestions: state.totalQuestions + action.payload.totalQuestions
      }
    default:
      return state;
  }
};

export default reducer;
