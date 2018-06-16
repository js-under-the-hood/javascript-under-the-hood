import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../helpers";

import styles from "./ErrorMessage.css";

const ErrorMessage = ({ message, className }) => {
    const errorMessageClassName = getComponentClassName([styles.errorMessage, className]);
    return (
        <p className={errorMessageClassName}>{message}</p>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
    className: PropTypes.string,
};

ErrorMessage.defaultProps = {
    message: "",
    className: "",   
};

export default ErrorMessage;