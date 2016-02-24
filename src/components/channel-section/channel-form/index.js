import './channel-form.less';

import React from 'react';

export default class ChannelFrom extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  onChange (e) {
    this.setState({
      channelName: e.target.value
    });
  }

  onSubmit (e) {
    e.preventDefault();

    const node = this.refs.channel;
    const channelName = node.value;

    this.props.addChannel(channelName);
    node.value = '';
  }

  render () {
    return (
      <form
        onSubmit={this.onSubmit.bind(this)}
        className="channel-form"
      >
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={this.onChange.bind(this)}
            ref="channel"
            placeholder="Add channel"
          />
        </div>
      </form>
    )
  }

  static propTypes = {
    addChannel: React.PropTypes.func.isRequired
  }
}