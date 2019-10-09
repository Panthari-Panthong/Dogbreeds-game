// export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'
import { setDogslist } from './dogslist'
import * as request from 'superagent'

export const SET_RIGHT_ANSWER = 'SET_RIGHT_ANSWER'
export const SET_OPTION = 'SET_OPTIONS'

// export function helloWorld (breeds) {
//     return {
//       type: 'NEW_HELLO_WORLD',
//       payload: [breeds]
//     }
//   }


export function getRightAnswer(breeds) {

    return function (dispatch, getState) {
        const currentBreeds = getState().breeds

        if (currentBreeds.length !== 0) {
            const id = Math.floor((Math.random() * currentBreeds.length));
            return dispatch(setRightAnswer(currentBreeds[id]))
        }


        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                // Create dogslist
                dispatch(setDogslist(breeds))

                // Create answer
                const id = Math.floor((Math.random() * breeds.length));
                dispatch(setRightAnswer(breeds[id]))
                const options = []
                options.push(breeds[id])
                // console.log('OPTIONS:', options);
                
                // Create options
                for (let i = 0; i < 3; i++) {
                    const idOptions = Math.floor((Math.random() * breeds.length));
                    // console.log(breeds[idOptions]);
                    
                    options.push(breeds[idOptions])
                    dispatch(setOptions(options))
                }
            })
    }
}
export function setOptions(breeds) {
    // console.log('setoption', breeds);
    
    return {
        type: 'SET_OPTIONS',
        payload: breeds
    }
}

export function setRightAnswer(breeds) {
    console.log('setRightAnswer', breeds);

    return {
        type: 'SET_RIGHT_ANSWER',
        payload: breeds
    }
}