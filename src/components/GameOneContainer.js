import React from 'react'
import { connect } from 'react-redux'
import BigPicture from './BigPicture';
import { getDogslist } from '../actions/dogslist'
import { getRightAnswer, checkAnswer } from '../actions/gameone'

class GameOneContainer extends React.Component {

    componentDidMount() {
        this.props.getRightAnswer()
    }

    render() {
        const options = this.props.game.sort()
        // console.log('PROPS - options', options);

        return (
            <div>
                {<BigPicture breed={this.props.game[0]} />}
                
                    {options.map((option) =>
                        <button onClick={() => checkAnswer(option, this.props.game[0])} key={option}>{option}</button>
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log('PROPS - state:', state);

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