import React from 'react';
import PropTypes from 'prop-types';

function UserCard (props) {
    const displayNameHtml = props.user.name ? <p className="user-name">{props.user.name}</p> : '';
    return (
        <div className="user">
            <img src={props.user.avatar_url} alt="user avatar" width="100" />
            <h1 className="user-title">{props.username}</h1>
            {displayNameHtml}
        </div>
    );
}

UserCard.propTypes = {
    username: PropTypes.string,
    user: PropTypes.object
};

export default UserCard;
