// export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'
export const SET_RIGHT_ANSWER = 'SET_RIGHT_ANSWER'
export const SET_OPTION = 'SET_OPTIONS'

// export function helloWorld (breeds) {
//     return {
//       type: 'NEW_HELLO_WORLD',
//       payload: [breeds]
//     }
//   }
export function setRightAnswer (breeds) {
    console.log('TOTAL BREEDS', breeds);     
    console.log('LENGTH', breeds.length);
    const id = Math.floor((Math.random() * breeds.length) + 1);   
    console.log('ANSWER BREED', breeds[id]);
    return {
        type: 'SET_RIGHT_ANSWER',
        payload: breeds[id]
    }
}

export function setOptions() {
    return function () {
        'test'
    }
}