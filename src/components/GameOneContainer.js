import React from 'react'
import { connect } from 'react-redux'
import BigPicture from './BigPicture';
import { getDogslist, setDogslist } from '../actions/Doglist'
import { setRightAnswer, setOptions} from '../actions/gameone'


class GameOneContainer extends React.Component {
    // state = {
    //     dogBreeds: null,
    //     rightBreed: null,
    //     answers: [],
    //     showAnswers: false
    // }

    componentDidMount() {
        this.props.getDogslist()
    }

    getRightBreed = (breeds) => {
        setRightAnswer(breeds)
    }

    // getWrongBreeds(breeds, amount) {
    //     for (let i = 0; i < amount; i++) {
    //         const id = Math.floor((Math.random() * breeds.length) + 1);
    //         // console.log(breeds[id]);
    //         this.setState({ answers: [...this.state.answers, breeds[id]] })
    //         this.state.answers.sort()
    //     }
    //     this.setState({ showAnswers: true})
    // }

    render() {
        // console.log(this.props.breeds);
        console.log(this.props.breeds)
        return (
            <div>
            {!this.props.breeds && 'nee' }
            {this.props.breeds && this.getRightBreed(this.props.breeds)}
            
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
        //         {this.props.breeds && <BigPicture breed={this.props.breed} />}
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
    console.log('MapStateToProp:', state);
    
    return {
        breeds: state.dogslist,
        game: state.gameone
    }
}
const mapDispatchToProps = {
    getDogslist,
    setDogslist,
    setRightAnswer,
    setOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOneContainer)