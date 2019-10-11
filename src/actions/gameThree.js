import * as request from 'superagent';
import { setDogslist } from './dogslist'
export const GET_RANDOM = 'GET_RANDOM'
export const SET_RIGHT_ANSWER = 'SET_RIGHT_ANSWER';
export const GET_DOGIMAGES = 'GET_DOGIMAGES';
export const GET_ANSWER = 'GET_ANSWER';
export const SET_OPTION = 'SET_OPTIONS'

export function getRandom(question) {
  console.log(question)
  return {
    type: 'GET_RANDOM',
    payload: question
  }
}

//Game two action
export function setRightAnswer(name) {
  return {
    type: 'SET_RIGHT_ANSWER',
    payload: name
  };
}
export function setDogImages(images) {
  return {
    type: 'GET_DOGIMAGES',
    payload: images
  };
}
export function getAnswer(answer) {
  return {
    type: 'GET_ANSWER',
    payload: answer
  };
}


//Game one action
export function setOptions(breeds) {
  return {
    type: 'SET_OPTIONS',
    payload: breeds
  }
}


export function gameThree() {
  return function (dispatch, getState) {
    const randomQuestion = Math.floor((Math.random() * 2) + 1)
    console.log("RANDOM", randomQuestion)
    dispatch(getRandom(randomQuestion))

    if (randomQuestion === 1) {
      request('https://dog.ceo/api/breeds/image/random/3').then(response => {
        const images = response.body.message.map(url => {
          return url.split('/')[4];
        });
        // console.log(images)
        const rightImage = images[Math.floor(Math.random() * images.length)];
        // console.log(rightImage)
        dispatch(setDogImages(response.body.message));
        dispatch(setRightAnswer(rightImage));
      });
    } else {
      const currentBreeds = getState().breeds
      if (currentBreeds.length !== 0) {
        const id = Math.floor((Math.random() * currentBreeds.length));
        dispatch(setRightAnswer(currentBreeds[id]))
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
          for (let i = 0; i < 2; i++) {
            const idOptions = Math.floor((Math.random() * breeds.length));
            options.push(breeds[idOptions])
            // console.log('1. Options created:', breeds[idOptions]);
          }
          dispatch(setOptions(options))
        })
    }
  }
}
