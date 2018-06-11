import React from "react";
import PropTypes from "prop-types";
import ConceptTitle from "../ConceptTitle";
import ConceptButton from "../ConceptButton";
import Text from "../../../Text";
import { getComponentClassName } from "../../../../helpers";

import "./Concept.css";

const Concept = ({ data, className }) => {
    const conceptclassName = getComponentClassName(["concept", className]);
    return (
        <div className={conceptclassName}>
        <ConceptTitle value={data.title} />
        <Text className="conceptText" value={data.description} />
        <ConceptButton />
        </div>
    );
};

Concept.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string,
};

Concept.defaultProps = {
    className: "",
};

export default Concept;