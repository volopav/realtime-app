import './channel-list.less';

import React from 'react';
import Channel from './channel';

export default class ChannelList extends React.Component {
  render () {
    return (
      <ul className="channel-list">
        {this.props.channels.map(ch => {
          return (
            <Channel
              channel={ch}
              key={ch.id}
              {...this.props}
            />
          )
        })}
      </ul>
    )
  }

  static propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
  }
}
