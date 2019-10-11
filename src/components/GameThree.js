import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameThree } from '../actions/gameThree';
import { checkAnswer } from '../actions/userInput';
import { getDogslist } from '../actions/dogslist';
import BigPicture from './BigPicture';
import './GameThree.css';
class GameThree extends Component {
  componentDidMount() {
    this.props.gameThree();
  }

  nextQuestion = () => {
    if (this.props.userInput.correct === false) {
      this.componentDidMount();
    } else if (this.props.userInput.correct === true) {
      setTimeout(() => this.componentDidMount(), 2000);
    } else {
      this.componentDidMount();
    }
  };

  render() {
    const options = [...this.props.game].sort();
    return (
      <div>
        {this.props.randomQues === 1 ? (
          <div>
            <h1>{this.props.correctAnswer}</h1>
            {this.props.images.map(url => {
              return (
                <img
                  className='image-options'
                  key={url}
                  value={url.split('/')[4]}
                  src={url}
                  alt='Dog'
                  onClick={() =>
                    this.props.checkAnswer(
                      url.split('/')[4],
                      this.props.correctAnswer,
                      this.props.userInput,
                      this.nextQuestion()
                    )
                  }
                />
              );
            })}
          </div>
        ) : (
          <div>
            <div>
              {<BigPicture breed={this.props.game[0]} />}

              {options.map(option => (
                <button
                  className='btn-options'
                  onClick={() =>
                    this.props.checkAnswer(
                      option,
                      this.props.game[0],
                      this.props.userInput,
                      this.nextQuestion()
                    )
                  }
                  key={option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    randomQues: state.randomQues,
    images: state.images,
    correctAnswer: state.correctAnswer,
    userInput: state.userInput,
    breeds: state.breeds,
    game: state.gameone
  };
};
export default connect(
  mapStateToProps,
  { gameThree, checkAnswer, getDogslist }
)(GameThree);
