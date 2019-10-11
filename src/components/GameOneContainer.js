import React from 'react'
import { connect } from 'react-redux'
import BigPicture from './BigPicture';
import { getDogslist } from '../actions/dogslist'
import { getRightAnswer } from '../actions/gameone'
import { checkAnswer } from '../actions/userInput'



class GameOneContainer extends React.Component {

    componentDidMount() {
        this.props.getRightAnswer()
    }

    render() {
        const options = [...this.props.game].sort()

        return (
            <div>
                {<BigPicture breed={this.props.game[0]} />}

                {options.map((option) =>
                    <button
                        onClick={() => this.props.checkAnswer(option, this.props.game[0], this.props.userInput)}
                        key={option}>
                        {option}
                    </button>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds,
        game: state.gameone,
        userInput: state.userInput
    }
}
const mapDispatchToProps = {
    getDogslist,
    getRightAnswer,
    checkAnswer
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)