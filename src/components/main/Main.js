import React from 'react';
import './Main.css'

class Main extends React.Component {
  constructor () {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    const username = this.refs.username.value;
    this.props.search(username);
    this.refs.userForm.reset();
  }
  render () {
    return (
      <div className="button__container">
        <form ref="userForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="username" placeholder="username" />
          <input type="submit" value="Go" />
        </form>
        <p>user: {this.props.username}</p>
        <p>name: {this.props.displayName}</p>
      </div>
    )
  }
}

export default Main;
