import React from "react";
import PropTypes from "prop-types";

import "./Text.css";

const Text = ({ value, className }) => {
    const textClassName = ["text", className].join(" ").trim();
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