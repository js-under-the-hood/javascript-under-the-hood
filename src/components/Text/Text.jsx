import React from "react";
import PropTypes from "prop-types";

import styles from "./Text.css";
import { getComponentClassName } from "../../helpers";

const Text = ({ value, className }) => {
    const textClassName = getComponentClassName([styles.text, className]);
    return <p className={textClassName}>{value}</p>;
};

Text.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Text.defaultProps = {
    className: "",
};

export default Text;