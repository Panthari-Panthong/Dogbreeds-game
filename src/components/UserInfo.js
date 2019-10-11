import React from 'react';
import './UserInfo.css';
export default class UserInfo extends React.Component {
  render() {
    const user = this.props.user;
    const { score, totalQuestions } = user;
    // // const total = (totalQuestions == 0) ? 0 :
    console.log(score, totalQuestions);
    // console.log(score / total);
    let progres = totalQuestions !== 0 ? (score / totalQuestions) * 100 : 0;
    progres = Math.round(progres);

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
    );
  }
}
