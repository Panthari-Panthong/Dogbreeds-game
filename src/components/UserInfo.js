import React from 'react';
import './UserInfo.css';
export default class UserInfo extends React.Component {
  render() {
    const user = this.props.user;

    const { score, totalQuestions } = user;
    let progress = totalQuestions !== 0 ? (score / totalQuestions) * 100 : 0;
    progress = Math.round(progress);

    return (
      <div className='box-info'>
        <ul>
          <li className='user-info'>User name: {user.name}</li>
          <li className='user-info'>Score: {user.score}</li>
          <li className='user-info'>Total questions: {user.totalQuestions}</li>
          <li className='user-info'>Streak: {user.streak}</li>
          <li className='user-info'>Progress: {progress} %</li>
        </ul>
      </div>
    );
  }
}
