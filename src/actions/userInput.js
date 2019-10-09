export const ADD_USER = 'ADD_USER'

export function addUser(userName) {
  return {
    type: 'ADD_USER',
    payload: {
      id: Math.ceil(Math.random() * 10000),
      ...userName,
      score: 0
    }
  }
}
