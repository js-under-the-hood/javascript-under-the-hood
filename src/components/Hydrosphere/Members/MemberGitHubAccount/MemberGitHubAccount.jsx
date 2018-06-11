import React from "react";
import PropTypes from "prop-types";

const MemberGitHubAccount = ({ href, className }) => (
    <a className={className} href={href} target="_blank">GitHub Account</a>
);

MemberGitHubAccount.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string,
};

MemberGitHubAccount.defaultProps = {
    className: "",
};

export default MemberGitHubAccount;