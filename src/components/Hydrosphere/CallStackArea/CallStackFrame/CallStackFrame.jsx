import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../../helpers";

import styles from "./CallStackFrame.css";

const CallStackFrame = ({ id, value, transparent }) => {
    const className = getComponentClassName([styles.callStackFrame, transparent ? styles.transparent : ""]);
    return (
        <div className={className}>
            <div className={styles.frameId}>{id}</div>
            <div className={styles.frameName}>{value}</div>
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