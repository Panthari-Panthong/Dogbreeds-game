import React from 'react';
import './UserInfo.css';
export default class UserInfo extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <ul>
          <li className='user-info'>User name: {user.name}</li>
          <li className='user-info'>Score: {user.score}</li>
          <li className='user-info'>Total questions: {user.totalQuestions}</li>
          <li className='user-info'>Streak: {user.streak}</li>
        </ul>
      </div>
    );
  }
}
