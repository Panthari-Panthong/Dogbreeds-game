import React from 'react'
export default class UserInfo extends React.Component {
  render() {
    const user = this.props.user

    const { score, totalQuestions } = user
    let progres = (totalQuestions !== 0) ? (score / totalQuestions) * 100 : 0
    progres = Math.round(progres)


    return (
      <div>
        <ul>
          <li>User name: {user.name}</li>
          <li>Score: {user.score}</li>
          <li>Total questions: {user.totalQuestions}</li>
          <li>Streak: {user.streak}</li>
          <li>Progres: {progres} %</li>
        </ul>
      </div>
    )
  }
}