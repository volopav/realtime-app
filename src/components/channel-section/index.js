import React from 'react';

import ChannelList from './channel-list';
import ChannelForm from './channel-form';

export default class ChannelSection extends React.Component {
  render () {
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Channels</strong>
        </div>
        <div className="panel-body channels">
          <ChannelList {...this.props} />
          <ChannelForm {...this.props} />
        </div>
      </div>
    )
  }

  static propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    addChannel: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
  }
}
