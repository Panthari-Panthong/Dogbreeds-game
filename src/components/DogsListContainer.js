import * as React from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'

import DogsList from './DogsList'
import { setDogslist } from '../actions/dogslist'


class DogsListContainer extends React.Component {
  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => this.props.setDogslist(Object.keys(response.body.message)))

  }

  render() {
    return <DogsList breeds={this.props.breeds} />
  }
}

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds
  }
}

export default connect(mapStateToProps, { setDogslist })(DogsListContainer)

