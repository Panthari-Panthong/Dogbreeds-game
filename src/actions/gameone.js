import { setDogslist } from './dogslist'
import * as request from 'superagent'

export const SET_RIGHT_ANSWER = 'SET_RIGHT_ANSWER'
export const SET_OPTION = 'SET_OPTIONS'

export function getRightAnswer() {

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
                console.log('2. right answer created:', options);

                // Create options
                for (let i = 0; i < 4; i++) {
                    const idOptions = Math.floor((Math.random() * breeds.length));
                    options.push(breeds[idOptions])
                    console.log('1. Options created:', breeds[idOptions]);
                }
                dispatch(setOptions(options))
            })
    }
}
export function setOptions(breeds) {
    // console.log('2. all set options:', breeds);

    return {
        type: 'SET_OPTIONS',
        payload: breeds
    }
}

export function setRightAnswer(breeds) {
    // console.log('1. set right answer: ', breeds);

    return {
        type: 'SET_RIGHT_ANSWER',
        payload: breeds
    }
}