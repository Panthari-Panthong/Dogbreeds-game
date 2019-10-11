import React from 'react'
export default class UserInfo extends React.Component {
  render() {
    const user = this.props.user

    return (
      <div>
        <ul>
          <li>User name: {user.name}</li>
          <li>Score: {user.score}</li>
          <li>Total questions: {user.totalQuestions}</li>
          <li>Streak: {user.streak}</li>
        </ul>
      </div>
    )
  }
}