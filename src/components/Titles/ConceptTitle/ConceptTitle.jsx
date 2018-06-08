import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";

import "./ConceptTitle.css";

const ConceptTitle = ({ value }) => (
    <Title
        className="conceptTitle"
        value={value}
    />
);

ConceptTitle.propTypes = {
    value: PropTypes.string.isRequired,
};

export default ConceptTitle;