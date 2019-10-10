import React from 'react'
import { connect } from 'react-redux'
import BigPicture from './BigPicture';
import { getDogslist } from '../actions/dogslist'
import { getRightAnswer } from '../actions/gameone'
import { checkAnswer } from '../actions/sharedGames'

class GameOneContainer extends React.Component {
    componentDidMount() {
        this.props.getRightAnswer()
    }

    render() {
        // console.log('PROPS, this.props.game);
        const options = [...this.props.game].sort()

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