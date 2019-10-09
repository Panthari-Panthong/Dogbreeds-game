import React from 'react'
// import request from 'superagent'
import { getDogImages } from '../actions/dogImages'
import { connect } from 'react-redux'

class BigPicture extends React.Component {
    
    componentWillLoad() {
        fetch ()
            this.props.getDogImages(this.props.breed, 1)
    }
    
    render() {
        console.log('IMAGE:', this.props.breed);
        
        return (
            <div className="dogs-list">
                test
                <h1>What's the breed of this dog?</h1>
            <img src={this.props.image} alt="dog"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('BIGPICTURE:', state)
    return {
        image: state.images,
    }
}
const mapDispatchToProps = {
    getDogImages
}

export default connect(mapStateToProps, mapDispatchToProps)(BigPicture)