import * as request from 'superagent'
export const SET_DOGSLIST = 'SET_DOGSLIST'
export const GET_DOGSLIST = 'GET_DOGSLIST'

export function setDogslist(breeds) {
 return {
   type: 'SET_DOGSLIST',
   payload: breeds
 }
}
export function getDogslist() {
 return function (dispatch) {
   request('https://dog.ceo/api/breeds/list/all')
     .then(response => {
       dispatch(setDogslist(Object.keys(response.body.message)))
     })
 }
}