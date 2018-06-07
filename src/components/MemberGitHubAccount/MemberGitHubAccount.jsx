import React from 'react';
import PropTypes from 'prop-types';

const MemberGitHubAccount = ({href, className}) => {
    return (
        <a className={className} href={href}>GitHub Account</a>
    );
};

MemberGitHubAccount.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
};

export default MemberGitHubAccount;