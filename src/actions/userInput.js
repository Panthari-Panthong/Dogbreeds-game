export const ADD_USER = 'ADD_USER'

export function addUser(userName) {
  return {
    type: 'ADD_USER',
    payload: {
      userName
    }
  }
}
