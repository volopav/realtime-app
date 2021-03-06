import './message-list.less';

import React, {Component} from 'react';

import Message from './message';

export default class MessageList extends Component {
  render () {
    return (
      <ul className="message-list">
        {this.props.messages.map(msg => {
          return (
            <Message message={msg} key={msg.id} />
          )
        })}
      </ul>
    )
  }

  static propTypes = {
    messages: React.PropTypes.array.isRequired
  }
}
