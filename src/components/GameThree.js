import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gameThree } from '../actions/gameThree'
import { checkAnswer } from '../actions/userInput';
import { getDogslist } from '../actions/dogslist'
import BigPicture from './BigPicture'

class GameThree extends Component {
  // getData() {
  //   setTimeout(() => {
  //     console.log('Our data is fetched');
  //   }, 1000)
  // }

  componentDidMount() {
    this.props.gameThree();
  }

  render() {
    const options = [...this.props.game].sort()
    return (
      <div>
        {this.props.randomQues === 1 ?
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
          </div> :
          <div>
            <div>
              {<BigPicture breed={this.props.game[0]} />}

              {options.map((option) =>
                <button onClick={() => this.props.checkAnswer(option, this.props.game[0], this.props.userInput)} key={option}>{option}</button>
              )}
            </div>
          </div>
        }

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    randomQues: state.randomQues,
    images: state.images,
    correctAnswer: state.correctAnswer,
    userInput: state.userInput,
    breeds: state.breeds,
    game: state.gameone
  }
}
export default connect(mapStateToProps, { gameThree, checkAnswer, getDogslist })(GameThree)