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
  return {
    images: state.images,
    correctAnswer: state.correctAnswer
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameTwo);
