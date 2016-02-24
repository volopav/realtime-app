import React, {Component} from 'react';

export default class User extends Component {
  render () {
    return (
      <li>{this.props.user.name}</li>
    )
  }

  static propTypes = {
    user: React.PropTypes.object.isRequired
  }
}
