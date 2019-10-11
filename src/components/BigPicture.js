import React from 'react';
import { getDogImages } from '../actions/dogImages';
import { connect } from 'react-redux';
import './BigPicture.css';

const sleep = time =>
  new Promise(resolve => setTimeout(() => resolve(`time waited:`), time));

class BigPicture extends React.Component {
  componentDidMount() {
    sleep(100).then(() => this.props.getDogImages(this.props.breed, 1));
  }

  render() {
    return (
      <div className='dogs-list'>
        {/* <h1>What's the breed of this dog?</h1> */}
        <img className='big-picture' src={this.props.image} alt='dog' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state.images
  };
};
const mapDispatchToProps = {
  getDogImages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BigPicture);
