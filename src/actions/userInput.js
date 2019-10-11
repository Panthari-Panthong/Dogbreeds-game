export const ADD_USER = 'ADD_USER';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const SELECT_ANSWER = 'SELECT_ANSWER';

export function checkAnswer(value, rightAnswer, user) {
  if (value === rightAnswer) {
    const correct = true
    return function (dispatch) {
      dispatch(setUserRightAnswer(correct))
      dispatch(selectRightAnswer(user))
    }

  } else {
    const correct = false
    return function (dispatch) {
      dispatch(setUserRightAnswer(correct))
      dispatch(selectWrongAnswer(user))
    }
  }
}

export function addUser(userName) {
  return {
    type: 'ADD_USER',
    payload: {
      userName
    }
  };
}

export function setUserRightAnswer(correct) {
  return {
    type: 'CORRECT_ANSWER',
    payload: { correct }
  };
}


export function selectRightAnswer() {

  return {
    type: 'SELECTRIGHT_ANSWER',
    payload: {
      score: +1,
      totalQuestions: +1
    }
  };
}


export function selectWrongAnswer() {

  return {
    type: 'SELECTWRONG_ANSWER',
    payload: {
      totalQuestions: +1
    }
  };
}


