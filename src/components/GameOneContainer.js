import React from 'react'
import { connect } from 'react-redux'
import BigPicture from './BigPicture';
import request from 'superagent'


class GameOneContainer extends React.Component {
    state = {
        dogBreeds: null,
        rightBreed: null,
        answers: [],
        showAnswers: false
    }

    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                this.updateBreeds(breeds)
                this.getRightBreed(breeds)
                this.getWrongBreeds(breeds, 2)
            })
            .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    }

    getRightBreed(breeds) {
        // console.log(breeds.length);
        const id = Math.floor((Math.random() * breeds.length) + 1);
        console.log(breeds[id]);
        this.setState({ rightBreed: breeds[id] })
        this.setState({ answers: [breeds[id]] })
        return breeds[id]
    }
    getWrongBreeds(breeds, amount) {
        for (let i = 0; i < 2; i++) {
            const id = Math.floor((Math.random() * breeds.length) + 1);
            // console.log(breeds[id]);
            this.setState({ answers: [...this.state.answers, breeds[id]] })
            this.state.answers.sort()
        }
        this.setState({ showAnswers: true})
    }

    render() {
        // console.log(this.state);
        // console.log(this.state.dogBreeds)

        return (
            <div className="dogs-list">
                {/* IF NOT FETCHED: */}
                {!this.state.dogBreeds && 'Loading...'}

                {/* IF FETCHED: */}
                {this.state.rightBreed && <BigPicture breed={this.state.rightBreed} />}
                <h1>Answers</h1>
                {!this.state.showAnswers && 'No answers'}

                {this.state.showAnswers && this.state.answers.map(answer => {
                  return <p>{answer}</p>
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dogs: state
    }
}

export default connect(mapStateToProps)(GameOneContainer)