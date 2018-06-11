import React from "react";
import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ value, className, uppercase }) => {
    const titleClassName = ["title", uppercase ? "uppercase" : "standard", className].join(" ").trim();
    return <h2 className={titleClassName}>{value}</h2>;
};

Title.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    uppercase: PropTypes.bool,
};

Title.defaultProps = {
    className: "",
    uppercase: false,
};

export default Title;