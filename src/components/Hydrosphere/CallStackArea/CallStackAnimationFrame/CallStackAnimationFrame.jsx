import React from "react";
import PropTypes from "prop-types";
import CallStackFrame from "../CallStackFrame";
import { getComponentClassName } from "../../../../helpers";

import styles from "./CallStackAnimationFrame.css";

const CallStackAnimationFrame = ({ id, value, animationClassName, onFinish }) => {
    const className = getComponentClassName([styles.callStackAnimationFrame, styles[animationClassName]]);
    return (
        <div className={className} onAnimationEnd={onFinish}>
            <CallStackFrame id={id} value={value}/>
        </div>
    );
};

CallStackAnimationFrame.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    animationClassName: PropTypes.string.isRequired,
    onFinish: PropTypes.func,
};

CallStackAnimationFrame.defaultProps = {
    onFinish: null,
};

export default CallStackAnimationFrame;