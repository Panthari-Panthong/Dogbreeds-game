import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDogslist } from '../actions/dogslist';
import './DogsListContainer.css';

class DogsListContainer extends React.Component {
  componentDidMount() {
    this.props.getDogslist();
  }

  render() {
    return (
      <div>
        <h1>List all dog breeds</h1>
        There are {this.props.breeds.length} dog breeds.
        <ul>
          {this.props.breeds.map(breed => (
            <li key={breed}>
              <Link to={`/dogsbreed/${breed}`}>{breed}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    breeds: state.breeds
  };
};

export default connect(
  mapStateToProps,
  { getDogslist }
)(DogsListContainer);
