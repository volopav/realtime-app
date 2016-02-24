import './user-form.less';

import React, {Component} from 'react';

export default class UserForm extends Component {
  onSubmit (e) {
    e.preventDefault();

    const node = this.refs.userName;
    const userName = node.value;

    this.props.setUserName(userName);
    node.value = '';
  }

  render () {
    return (
      <form
        className="user-form"
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className="form-group">
          <input
            ref="userName"
            type="text"
            className="form-control"
            placeholder="Set your name..."
          />
        </div>
      </form>
    )
  }

  static propTypes = {
    setUserName: React.PropTypes.func.isRequired
  }
}
