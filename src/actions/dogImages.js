import * as request from 'superagent'
export const GET_DOGIMAGES = 'GET_DOGIMAGES'

export function setDogImages(images) {
 return {
   type: 'GET_DOGIMAGES',
   payload: images
 }
}
export function getDogImages(breed, amount) {
  console.log('test', breed);
  
 return function (dispatch) {
   request(`https://dog.ceo/api/breed/${breed}/images/random/${amount}`)
     .then(response => {

       dispatch(setDogImag  es({answers: response.body.message,dogImage}))
     })
 }
}

