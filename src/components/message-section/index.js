import './message-section.less';

import React, {Component} from 'react';

import MessageList from './message-list';
import MessageForm from './message-form';

export default class MessageSection extends Component {
  render () {
    return (
      <div className="message-section panel panel-primary">
        <div className="panel-heading">
          <strong>Messages</strong>
        </div>
        <div className="panel-body messages">
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    )
  }

  static propTypes = {
    messages: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.object.isRequired,
    addMessage: React.PropTypes.func.isRequired
  }
}
