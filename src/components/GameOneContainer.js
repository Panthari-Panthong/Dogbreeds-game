import React from 'react';
import { connect } from 'react-redux';
import BigPicture from './BigPicture';
import { getDogslist } from '../actions/dogslist';
import { getRightAnswer } from '../actions/gameone';
import { checkAnswer } from '../actions/userInput';
import './GameOneContainer.css';

class GameOneContainer extends React.Component {
    componentDidMount() {
        this.props.getRightAnswer()
    }

    nextQuestion = () => {
        if (this.props.userInput.correct === false) {
            this.componentDidMount()
        } else if (this.props.userInput.correct === true) {
            setTimeout(() => this.componentDidMount(), 2000)
        } else {
            this.componentDidMount()
        }
    }


    render() {
        const options = [...this.props.game].sort()

        return (
            <div>
                {<BigPicture breed={this.props.game[0]} correct={this.props.userInput.correct} />}

                {options.map((option) =>
                    <button  className='btn-options' 
                        onClick={() => this.props.checkAnswer(option, this.props.game[0], this.props.userInput, this.nextQuestion())}
                        key={option}>
                        {option}
                    </button>
                )}
            </div>
        )
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
