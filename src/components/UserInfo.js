import React from 'react'


export default class UserInfo extends React.Component {

  render() {
    return (
      <div>
        {this.props.user.map(user =>
          <p key={user.id}>User name: {user.name} Score : {user.score}</p>
        )}
      </div>
    )
  }
}