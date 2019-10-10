export const ADD_USER = 'ADD_USER'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const SELECT_ANSWER = 'SELECT_ANSWER'

export function checkAnswer(value) {
 console.log("VALUE", value)
 return {
   type: 'SELECT_ANSWER',
   payload: value
 }
}


export function addUser(userName) {
  return {
    type: 'ADD_USER',
    payload: {
      userName
    }
  }
}



// export function checkAnswer(input, rightAnswer) {
//   console.log('checkAnswers!', input, rightAnswer);
  
//   if (input === rightAnswer) {
//       console.log('RIGHT ANSWER');
//       // this.dispatch({type: 'CORRECT_ANSWER',
//       // payload: ''})
      
//   } else {
//       console.log('WRONG ANSWER...');
//       // setTimeout(this.forceUpdate(), 2000)
//   }
// }

export function setUserRightAnswer() {
  console.log('test');
  
  return {
      type: 'CORRECT_ANSWER',
      payload: ''
    }
}
