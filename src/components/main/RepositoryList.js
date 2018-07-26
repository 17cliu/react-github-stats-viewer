import React from 'react';

function RepositoryListItem (props) {
    return (
        <li><a href={props.repo.html_url}>{props.repo.name}</a></li>
    );
}

function RepositoryList (props) {
    const { repositories } = props;

    if (!repositories || repositories.length < 1) return 'aaa';

    return (
        <ul className="repository-list">
            {repositories.map(r => <RepositoryListItem repo={r} />)}
        </ul>
    )
}

export default RepositoryList;
