import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRightAnswer } from '../actions/gameTwo';

export class GameTwo extends Component {
  componentDidMount() {
    this.props.getRightAnswer();
  }
  render() {
    return (
      <div>
        <h1>{this.props.correctAnswer}</h1>
        {console.log(this.props.images)}
        {this.props.images.map(url => {
          return <img key={url} src={url} alt='Dog' />;
        })}
      </div>
    );
  }
}
const mapDispatchToProps = {
  getRightAnswer
};
const mapStateToProps = state => {
  console.log('check state', state);
  return {
    images: state.images,
    correctAnswer: state.gameTwo
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameTwo);
