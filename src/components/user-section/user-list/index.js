import './user-list.less';

import React, {Component} from 'react';
import User from './user';

export default class UserList extends Component {
  render () {
    return (
      <ul className="user-list">
        {this.props.users.map( user => {
          return (
            <User
              user={user}
              key={user.id}
            />
          )
        })}
      </ul>
    )
  }

  static propTypes = {
    users: React.PropTypes.array.isRequired
  }
}
