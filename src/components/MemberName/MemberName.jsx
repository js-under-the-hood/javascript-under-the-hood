import React from 'react';
import PropTypes from 'prop-types';

const MemberName = ({name, className}) => {
    return (
        <h2 className={className}>{name}</h2>
    );
};

MemberName.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default MemberName;