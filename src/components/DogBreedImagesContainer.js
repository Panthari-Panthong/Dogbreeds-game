import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogImages } from '../actions/dogImages';
import { Link } from 'react-router-dom';

class DogBreedImagesContainer extends Component {
  componentDidMount() {
    this.props.getDogImages(this.props.match.params.breed, 10);
  }

  render() {
    return (
      <div>
        <h1>Dog Breed Images</h1>
        This page will show images of the <b>
          {this.props.match.params.breed}
        </b>{' '}
        breed.&nbsp;&nbsp;
        <Link to='/dogslist'>Go back to the index</Link>
        <br />
        <br />
        <div>
          {this.props.images &&
            this.props.images.map(url => <img src={url} alt='Dog' key={url} />)}
          {!this.props.images && 'Loading...'}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

export default connect(
  mapStateToProps,
  { getDogImages }
)(DogBreedImagesContainer);
