//import './user-form.less';

import React, {Component} from 'react';

export default class MessageForm extends Component {
  onSubmit (e) {
    e.preventDefault();

    const node = this.refs.message;
    const message = node.value;

    this.props.addMessage(message);
    node.value = '';
  }

  render () {
    let input;
    if(this.props.activeChannel.id !== undefined) {
      input = (
        <input
          ref="message"
          type="text"
          className="form-control"
          placeholder="Add message..."
        />
      )
    }

    return (
      <form
        className="message-form"
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className="form-group">
          {input}
        </div>
      </form>
    )
  }

  static propTypes = {
    addMessage: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
  }
}

