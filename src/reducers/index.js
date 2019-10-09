import { combineReducers } from 'redux'
import breeds from './dogslist'
import userInput from './userInput'
import images from './dogImages'

export default combineReducers({
  breeds,
  images,
  userInput
})