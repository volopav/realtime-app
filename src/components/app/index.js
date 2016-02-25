import './app.less';
import React, { Component } from 'react';
import Socket from 'socket';

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
      messages: [],
      connected: false
    }
  }

  componentDidMount () {
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('channel add', this.onAddChannel.bind(this));
    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));
    socket.on('message add', this.onMessageAdd.bind(this));
  }

  onMessageAdd (message) {
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  onRemoveUser (removeUser) {
    let {users} = this.state;
    users = users.filter(user => {
      return user.id !== removeUser.id;
    });
    this.setState({users});
  }

  onAddUser (user) {
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }

  onEditUser (editUser) {
    let {users} = this.state;
    users = users.map(user => {
      if (editUser.id === user.id) {
        return editUser;
      }
      return user;
    });
    this.setState({users});
  }

  onConnect () {
    this.setState({connected: true});
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  }

  onDisconnect () {
    this.setState({connected: false});
  }

  onAddChannel (channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels})
  }

  addChannel (name) {
    this.socket.emit('channel add', {name});
  }

  setChannel (activeChannel) {
    this.setState({activeChannel});
    this.socket.emit('message unsubscribe');
    this.setState({messages: []});
    this.socket.emit('message subscribe', { channelId: activeChannel.id });
  }

  setUserName (name) {
    this.socket.emit('user edit', {name});
  }

  addMessage (body) {
    let {activeChannel} = this.state;
    this.socket.emit('message add', { channelId: activeChannel.id, body});
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
