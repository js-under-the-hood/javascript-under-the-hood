import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../helpers";

import styles from "./Water.css";

const Water = ({ className }) => {
    const waterClassName = getComponentClassName([styles.water, className]);
    return <div className={waterClassName} />
};

Water.propTypes = {
    className: PropTypes.string,
};

Water.defaultProps = {
    className: "",
};

export default Water;