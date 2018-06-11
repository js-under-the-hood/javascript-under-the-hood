import React from "react";
import PropTypes from "prop-types";
import Fish from "../Fish";
import Water from "../../Water";

import "./Fishes.css";

const Fishes = ({ data }) => (
    <div className="fishes">
        {
            data.map(fish => (
                <Fish key={fish.name} className={fish.name}/>
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