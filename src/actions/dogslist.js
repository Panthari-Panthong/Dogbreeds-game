export const SET_DOGSLIST = 'SET_DOGSLIST'

export function setDogslist(breeds) {
  return {
    type: 'SET_DOGSLIST',
    payload: breeds
  }
}
