import './app.less';
import React, { Component } from 'react';

import ChannelSection from 'components/channel-section';
import UserSection from 'components/user-section';
import MessageSection from 'components/message-section';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      messages: []
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
    let {users} = this.state;
    users.push({ id: users.length, name });
    this.setState({users});
    // TODO: send to server
  }

  addMessage (body) {
    let {messages, users} = this.state;
    let createdAt = new Date();
    let author = users.length ? users[0].name : 'anonymous';
    messages.push({ id: messages.length, body, createdAt, author });
    this.setState({messages});
    // TODO: send to server
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
          <MessageSection
            {...this.state}
            addMessage={this.addMessage.bind(this)}
          />
        </div>
      </div>
    );
  }
}
