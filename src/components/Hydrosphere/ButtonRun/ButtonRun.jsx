import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../helpers";

import styles from "./ButtonRun.css";

const ButtonRun = ({ active, onClickActive, className }) => {
    const btnRunClassName = getComponentClassName([styles.buttonRun, active ? "" : styles.disable, className]);
    return <div className={btnRunClassName} onClick={active ? onClickActive : null}>run</div>;
};

ButtonRun.propTypes = {
    active: PropTypes.bool,
    onClickActive: PropTypes.func,
    className: PropTypes.string,
};

ButtonRun.defaultProps = {
    active: true,
    onClickActive: null,  
    className: "",
};

export default ButtonRun;