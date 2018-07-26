import React from 'react';
import PropTypes from 'prop-types';
import RepositoryList from './RepositoryList';
import './Main.css';

class Main extends React.Component {
    constructor () {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);

        // as of react 16.3, string refs are deprecated, meaning this is bad:
        //  <input type="text" ref="username" />
        // instead, create a ref here, then reference it in the el like so:
        //  <input type="text" ref={this.usernameRef} />
        // actual dom node of ref is accessed at `this.usernameRef.current`.
        // https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba
        this.userFormRef = React.createRef();
        this.usernameRef = React.createRef();
    }
    componentDidMount () {
        // init view with default username
        this.props.search(this.props.username);
    }
    handleSubmit (e) {
        e.preventDefault();
        const username = this.usernameRef.current.value;
        this.props.search(username);
        this.userFormRef.current.reset();
    }
    render () {
        const displayNameHtml = this.props.user.name ? <p className="user-name">{this.props.user.name}</p> : '';

        return (
            <div className="page">
                <form className="search-form" ref={this.userFormRef} onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.usernameRef} placeholder="username" />
                    <input type="submit" value="Go" />
                </form>
                <div className="user">
                    <img src={this.props.user.avatar_url} alt="user avatar" width="100" />
                    <h1 className="user-title">{this.props.username}</h1>
                    {displayNameHtml}
                </div>
                <RepositoryList repositories={this.props.repositories} />
            </div>
        );
    }
}

Main.propTypes = {
    username: PropTypes.string,
    user: PropTypes.object,
    repositories: PropTypes.array,

    // actions that are used by this component
    search: PropTypes.func
};

export default Main;
