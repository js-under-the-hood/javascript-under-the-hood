import React from 'react';
import PropTypes from 'prop-type';
import './MemberEmail.css';

const MemberEmail = ({ email }) => {
    return (
        <div>
            <span className='memberEmail-title'>email:</span><span>{email}</span>
        </div>
    );
};

MemberEmail.propTypes = {
    className: PropTypes.string,
    email: PropTypes.string.isRequired,
};

export default MemberEmail;