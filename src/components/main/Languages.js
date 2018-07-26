import React from 'react';
import PropTypes from 'prop-types';

function Languages (props) {
    return (
        <div className="languages">
            {JSON.stringify(props.languages)}
        </div>
    );
}

Languages.propTypes = {
    languages: PropTypes.object
};

export default Languages;
