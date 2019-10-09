import * as request from 'superagent';
export const SET_RIGHT_ANSWER = 'SET_RIGHT_ANSWER';
export const GET_DOGIMAGES = 'GET_DOGIMAGES';
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
export function getRightAnswer() {
  return function(dispatch) {
    request('https://dog.ceo/api/breeds/image/random/3').then(response => {
      const images = response.body.message.map(url => {
        return url.split('/')[4];
      });
      const rightImage = images[Math.floor(Math.random() * images.length)]
        .replace(/-/, ' ')
        .toUpperCase();
      dispatch(setDogImages(response.body.message));
      dispatch(setRightAnswer(rightImage));
    });
  };
}
