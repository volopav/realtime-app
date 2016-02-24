import './app.less';
import React, { Component } from 'react';

import ChannelSection from 'components/channel-section';
import UserSection from 'components/users/user-section';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: []
    }
  }

  addChannel (name) {
    let {channels} = this.state;
    channels.push({ id: channels.length, name });
    this.setState({channels});
    // TODO: send to server
  }

  setChannel (activeChannel) {
    this.setState({activeChannel});
    //TODO: Get channel messages from server
  }

  setUserName (name) {

  }

  render() {
    return (
      <div className="app">
        <div className="nav">
          <div className="support">
            <ChannelSection
              {...this.state}
              addChannel={this.addChannel.bind(this)}
              setChannel={this.setChannel.bind(this)}
            />
          </div>
          <div className="user-area">
            <UserSection
              {...this.state}
              setUserName={this.setUserName.bind(this)}
            />
          </div>
        </div>
        <div className="messages-container">

        </div>
      </div>
    );
  }
}
