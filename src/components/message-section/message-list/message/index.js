import React, {Component} from 'react';

export default class Message extends Component {
  render () {
    let {message} = this.props;
    return (
      <li className="message">
        <div className="author">
          <strong>{message.author}</strong>
          <i className="timestamp">{message.createdAt.toString()}</i>
        </div>
        <div className="body">{message.body}</div>
      </li>
    )
  }

  static propTypes = {
    message: React.PropTypes.object.isRequired
  }
}
