import React from 'react'
import request from 'superagent'

export default class BigPicture extends React.Component {
    state = { dogImage: null }

    componentDidMount() {
        request
            .get(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
            .then(response => {
                this.updateBreeds(response.body.message)
            })
            .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
            dogImage: breeds
        })
    }

    render() {
        return (
            <div className="dogs-list">
                <h1>What's the breed of this dog?</h1>
                {/* { !this.state.dogImage && 'Loading...' } */}
                { this.state.dogImage && <img src={this.state.dogImage} alt="dog"/> }
            </div>
        )
    }
}