import React from 'react';
import { connect } from 'react-redux';
import BigPicture from './BigPicture';
import { getDogslist } from '../actions/dogslist';
import { getRightAnswer } from '../actions/gameone';
import { checkAnswer } from '../actions/userInput';
import './GameOneContainer.css';

class GameOneContainer extends React.Component {
  componentDidMount() {
    this.props.getRightAnswer();
  }
  nextQuestion = () => {
    this.componentDidMount();
  };
  render() {
    const options = [...this.props.game].sort();
    let option = [...this.props.game][0];
    return (
      <div>
        {option ? <BigPicture breed={this.props.game[0]} /> : null}

        {options.map(option => (
          <button
            className='btn-options'
            onClick={() =>
              this.props.checkAnswer(
                option,
                this.props.game[0],
                this.props.userInput,
                setTimeout(() => this.nextQuestion(), 2000)
              )
            }
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    breeds: state.breeds,
    game: state.gameone,
    userInput: state.userInput
  };
};
const mapDispatchToProps = {
  getDogslist,
  getRightAnswer,
  checkAnswer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOneContainer);
