import React from 'react';
import './Main.css'
import RepositoryList from './RepositoryList';

class Main extends React.Component {
    constructor () {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount () {
        // init view with default username
        this.props.search(this.props.username);
    }
    handleSubmit (e) {
        e.preventDefault();
        const username = this.refs.username.value;
        this.props.search(username);
        this.refs.userForm.reset();
    }
    render () {
        const displayNameHtml = this.props.user.name ? <p className="user-name">{this.props.user.name}</p> : '';

        return (
            <div className="page">
                <form className="search-form" ref="userForm" onSubmit={this.handleSubmit}>
                    <input type="text" ref="username" placeholder="username" />
                    <input type="submit" value="Go" />
                </form>
                <div className="user">
                    <img src={this.props.user.avatar_url} alt="user avatar" width="100" />
                    <h1 className="user-title">{this.props.username}</h1>
                    {displayNameHtml}
                </div>
                <RepositoryList repositories={this.props.repositories} />
            </div>
        )
    }
}

export default Main;
