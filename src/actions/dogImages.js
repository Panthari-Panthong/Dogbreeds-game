import * as request from 'superagent';
export const GET_DOGIMAGES = 'GET_DOGIMAGES';
export function setDogImages(images) {
  return {
    type: 'GET_DOGIMAGES',
    payload: images
  };
}

export function getDogImages(amount) {
  return function(dispatch, getState) {
    const currentImages = getState().dogImages;
    if (currentImages.length !== 0) {
      return;
    }
    request(`https://dog.ceo/api/breeds/image/random/${amount}`).then(
      response => {
        dispatch(setDogImages(response.body.message));
      }
    );
  };
}
