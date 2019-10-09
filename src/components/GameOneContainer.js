import React from 'react'
import { connect } from 'react-redux'
import BigPicture from './BigPicture';
import { getDogslist } from '../actions/dogslist'
import { getRightAnswer } from '../actions/gameone'


class GameOneContainer extends React.Component {
    componentDidMount() {
        this.props.getRightAnswer()
    }


    render() {
        const options = this.props.game.sort()
        // console.log('OPTIONS', options[0]);

        return (
            <div>
                

                <ul>
                    {options.map((option) =>
                        <li key={option}>{option}</li>
                    )}
                </ul>
                 {<BigPicture breed={this.props.game[0]} />}


                {!this.props.breeds && 'nee'}

                {/* // Select right answer */}
                {/* {this.props.breeds && this.getRightBreed(this.props.breeds)} */}

                {/* {this.props.breeds && this.props.breeds.map(answer => {
                  return <p>{answer}</p>
                })      } */}
            </div>
        )

        // return (
        //     <div className="dogs-list">
        //         {/* IF NOT FETCHED: */}
        //         {!this.props.breeds && 'Loading...'}

        //         {/* IF FETCHED: */}

        //         <h1>Answers</h1>
        //         {!this.state.showAnswers && 'No answers'}

        //         {this.state.showAnswers && this.state.answers.map(answer => {
        //           return <p>{answer}</p>
        //         })}
        //     </div>
        // )
    }
}

const mapStateToProps = (state) => {
    // console.log('MapStateToProp:', state);

    return {
        breeds: state.breeds,
        game: state.gameone
    }
}
const mapDispatchToProps = {
    getDogslist,
    getRightAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)