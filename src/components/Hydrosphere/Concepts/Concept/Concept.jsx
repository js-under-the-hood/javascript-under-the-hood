import React from "react";
import PropTypes from "prop-types";
import ConceptTitle from "../ConceptTitle";
import ConceptButton from "../ConceptButton";
import Text from "../../../Text";
import { getComponentClassName } from "../../../../helpers";

import styles from "./Concept.css";

const Concept = ({ data, className }) => {
    const conceptclassName = getComponentClassName([styles.concept, className]);
    return (
        <div className={conceptclassName}>
            <ConceptTitle value={data.title} />
            <Text className={styles.conceptText} value={data.description} />
            <ConceptButton href={data.url}/>
        </div>
    );
};

Concept.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string,
};

Concept.defaultProps = {
    className: "",
};

export default Concept;