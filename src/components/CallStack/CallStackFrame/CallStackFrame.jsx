import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../helpers";

import "./CallStackFrame.css";

const CallStackFrame = ({ id, value, transparent }) => {
    const className = getComponentClassName(["callStackFrame", transparent ? "transparent" : ""]);
    return (
        <div className={className}>
            <div className="frameId">{id}</div>
            <div className="frameName">{value}</div>
        </div>
    );
};

CallStackFrame.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    transparent: PropTypes.bool,
};

CallStackFrame.defaultProps = {
    transparent: false,
};

export default CallStackFrame;