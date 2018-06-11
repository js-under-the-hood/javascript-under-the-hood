import React from "react";
import PropTypes from "prop-types";

import { getComponentClassName } from "../../../helpers";
import "./Wave.css";

const Wave = ({ containerClassName, frontWaveClassName }) => {
    const waveClassName = getComponentClassName(["wave", containerClassName]);
    const waveFrondClassName = getComponentClassName(["waveFront", frontWaveClassName]);
    return (
        <div className={waveClassName}>
            <div className="waveBack"/>
            <div className={waveFrondClassName}/>
        </div>
    );
};

Wave.propTypes = {
    containerClassName: PropTypes.string,
    frontWaveClassName: PropTypes.string,
};

Wave.defaultProps = {
    containerClassName: "",
    frontWaveClassName: "",
};

export default Wave;