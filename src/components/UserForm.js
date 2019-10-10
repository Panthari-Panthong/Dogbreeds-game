import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions/userInput'
import UserInfo from './UserInfo'

class UserForm extends React.Component {
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.name) {
      this.props.addUser(this.state.name)
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <UserInfo user={this.props.user} />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.userInput
  }
}

export default connect(mapStateToProps, { addUser })(UserForm)