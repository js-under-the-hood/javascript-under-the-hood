import React from "react";
import PropTypes from "prop-types";

import "./Water.css";

const Water = ({ className }) => {
    const waterClassName = ["water", className].join(" ").trim();
    return <div className={waterClassName} />
};

Water.propTypes = {
    className: PropTypes.string,
};

Water.defaultProps = {
    className: "",
};

export default Water;