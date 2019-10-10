import { combineReducers } from 'redux';
import breeds from './dogslist';
import userInput from './userInput';
import images from './dogImages';
import correctAnswer from './correctAnswer';
import gameone from './gameone'

export default combineReducers({
  breeds,
  images,
  userInput,
  gameone,
   correctAnswer
})

