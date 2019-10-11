export const ADD_USER = 'ADD_USER';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const SELECT_ANSWER = 'SELECT_ANSWER';

export function checkAnswer(value, rightAnswer, user) {
  if (value === rightAnswer) {
    return {
      type: 'SELECT_ANSWER',
      payload: {
        score: user.score++,
        totalQuestions: user.totalQuestions++,
        value: value
      }
    };
  } else {
    return {
      type: 'SELECT_ANSWER',
      payload: { totalQuestions: user.totalQuestions++, value: value }
    };
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

export function setUserRightAnswer() {
  return {
    type: 'CORRECT_ANSWER',
    payload: ''
  };
}


