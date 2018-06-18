import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../../helpers";

import styles from "./Social.css";

const Social = ({ onClick, className }) => {
    const socialClassName = getComponentClassName([styles.shareButton, className]);
    return <div className={socialClassName} onClick={onClick} />
};

Social.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

Social.defaultProps = {
    className: "",
};

export default Social;