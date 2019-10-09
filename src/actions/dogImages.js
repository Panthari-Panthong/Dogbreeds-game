import * as request from 'superagent';
export const GET_DOGIMAGES = 'GET_DOGIMAGES';

export function setDogImages(images) {
  return {
    type: 'GET_DOGIMAGES',
    payload: images
  };
}

export function getDogImages(breed, amount) {
  return function(dispatch) {
    request(`https://dog.ceo/api/breed/${breed}/images/random/${amount}`).then(
      response => {
        dispatch(setDogImages(response.body.message));
      }
    );
  };
}
