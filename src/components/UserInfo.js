import React from 'react'


export default class UserInfo extends React.Component {

  render() {
    const user = this.props.user
    const { score, totalQuestions } = user
    //  console.log(typeof(totalQuestions);
    const total = (totalQuestions == 0) ? 0 :
      console.log(total);
    console.log(score / total);
    let progres = (user.score / user.totalQuestions) * 100
    // console.log(progres);



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

