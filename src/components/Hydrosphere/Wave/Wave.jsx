import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../helpers";

import styles from "./Wave.css";

const Wave = ({ containerClassName, frontWaveClassName }) => {
    const waveClassName = getComponentClassName([styles.wave, containerClassName]);
    const waveFrondClassName = getComponentClassName([styles.waveFront, frontWaveClassName]);
    return (
        <div className={waveClassName}>
            <div className={styles.waveBack} />
            <div className={waveFrondClassName} />
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