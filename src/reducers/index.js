import { combineReducers } from 'redux';
import breeds from './dogslist';
import userInput from './userInput';
import images from './dogImages';
import correctAnswer from './correctAnswer';
export default combineReducers({
  breeds,
  images,
  userInput,
  correctAnswer
});
