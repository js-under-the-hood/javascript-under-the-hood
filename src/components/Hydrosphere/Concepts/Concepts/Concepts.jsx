import React from "react";
import PropTypes from "prop-types";
import Concept from "../Concept";
import SubTitle from "../../SubTitle";
import Water from "../../Water";

import "./Concepts.css";

const Concepts = ({ data }) => (
    <div className="concepts" id="concepts">
        <Water />
        <SubTitle value="concepts" />
        <div className="conceptsWrapper">
            {
                data.map(conceptData => (
                    <Concept
                        key={conceptData.title}
                        data={conceptData}
                        className="jsConcept"/>
                ))
            }
        </div>
    </div>
);

Concepts.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Concepts;