import * as request from 'superagent';
export const SET_DOGSLIST = 'SET_DOGSLIST';
export function setDogsList(breeds) {
  return {
    type: 'SET_DOGSLIST',
    payload: breeds
  };
}

export function getDogsList() {
  return function(dispatch, getState) {
    const currentBreeds = getState().dogList;
    if (currentBreeds.length !== 0) {
      return;
    }



    request('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        dispatch(setDogslist(Object.keys(response.body.message)))

      })
  }
}
