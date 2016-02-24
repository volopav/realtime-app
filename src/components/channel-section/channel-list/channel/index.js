import './channel.less';
import React from 'react';

export default class Channel extends React.Component {
  onClick (e) {
    e.preventDefault();

    const {setChannel, channel} = this.props;
    setChannel(channel);
  }

  render () {
    const {channel, activeChannel} = this.props;
    const active = channel === activeChannel ? 'channel active' : 'channel';

    return (
      <li
        className={active}
        onClick={this.onClick.bind(this)}>
        {channel.name}
      </li>
    )
  }

  static propTypes = {
    channel: React.PropTypes.object.isRequired,
    activeChannel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired
  }
}