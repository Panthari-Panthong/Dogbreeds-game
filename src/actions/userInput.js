export const ADD_USER = 'ADD_USER';
export const CORRECT_ANSWER = 'CORRECT_ANSWER';
export const SELECT_ANSWER = 'SELECT_ANSWER';

export function checkAnswer(value, rightAnswer, user) {
  if (value === rightAnswer) {
    console.log('RIGHT ANSWER');
    console.log('check the user value', value);

    return {
      type: 'SELECT_ANSWER',
      payload: {
        score: user.score++,
        totalQuestions: user.totalQuestions++,
        value: value
      }
    };
  } else {
    console.log('WRONG ANSWER...');
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
  console.log('test');

  return {
    type: 'CORRECT_ANSWER',
    payload: ''
  };
}
