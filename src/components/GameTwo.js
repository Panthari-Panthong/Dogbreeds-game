import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRightAnswer } from '../actions/gameTwo';
import { checkAnswer } from '../actions/userInput';
export class GameTwo extends Component {
  componentDidMount() {
    this.props.getRightAnswer();
  }
  render() {
    return (
      <div>
        <h1>{this.props.correctAnswer}</h1>
        {this.props.images.map(url => {
          return (
            <img
              key={url}
              value={url.split('/')[4]}
              src={url}
              alt='Dog'
              onClick={() =>
                this.props.checkAnswer(
                  url.split('/')[4],
                  this.props.correctAnswer,
                  this.props.userInput
                )
              }
            />
          );
        })}
      </div>
    );
  }
}
const mapDispatchToProps = {
  getRightAnswer,
  checkAnswer
};
const mapStateToProps = state => {
  return {
    images: state.images,
    correctAnswer: state.correctAnswer,
    userInput: state.userInput
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameTwo);
