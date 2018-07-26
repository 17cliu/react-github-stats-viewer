import React from 'react';
import PropTypes from 'prop-types';

function RepositoryListItem (props) {
    return (
        <li><a href={props.repo.html_url}>{props.repo.name}</a></li>
    );
}

RepositoryListItem.propTypes = {
    repo: PropTypes.object
};

function RepositoryList (props) {
    const { repositories } = props;

    if (!repositories || repositories.length < 1) return 'aaa';

    return (
        <ul className="repository-list">
            {repositories.map(r => <RepositoryListItem key={r.id} repo={r} />)}
        </ul>
    );
}

RepositoryList.propTypes = {
    repositories: PropTypes.array
};

export default RepositoryList;
