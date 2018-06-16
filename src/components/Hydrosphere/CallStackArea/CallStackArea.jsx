import React from "react";
import PropTypes from "prop-types";

import styles from "./CallStackArea.css";

const CallStackArea = ({ children }) => (
    <div className={styles.callStackArea}>
        <div className={styles.callStack}>
            { children }
        </div>
    </div>
);

CallStackArea.propTypes = {
    children: PropTypes.node,
};

CallStackArea.defaultProps = {
    children: null, 
};

export default CallStackArea;