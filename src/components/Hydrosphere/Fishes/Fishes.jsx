import React from "react";
import PropTypes from "prop-types";
import Fish from "./Fish";
import Water from "../Water";

import styles from "./Fishes.css";

const Fishes = ({ data }) => (
    <div className={styles.fishes}>
        {
            data.map(fish => (
                <Fish
                    key={fish.name}
                    className={styles[fish.name]}
                />
            ))
        }
        <Water />
    </div>
);

Fishes.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Fishes;