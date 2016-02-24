import './user-section.less';

import React, {Component} from 'react';

import UserList from './user-list';
import UserForm from './user-form';

export default class UserSection extends Component {
  render () {
    return (
      <div className="user-section panel panel-primary">
        <div className="panel-heading">
          <strong>Users</strong>
        </div>
        <div className="panel-body users">
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }

  static propTypes = {
    users: React.PropTypes.array.isRequired,
    setUserName: React.PropTypes.func.isRequired
  }
}