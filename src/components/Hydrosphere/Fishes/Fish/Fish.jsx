import React from "react";
import PropTypes from "prop-types";

import { getComponentClassName } from "../../../../helpers";
import styles from "./Fish.css";

const Fish = ({ className }) => {
    const fishClassName = getComponentClassName([styles.fish, className]);
    return <div className={fishClassName} />
};

Fish.propTypes = {
    className: PropTypes.string,
};

Fish.defaultProps = {
    className: "",
};

export default Fish;