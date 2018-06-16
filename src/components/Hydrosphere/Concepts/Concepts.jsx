import React from "react";
import PropTypes from "prop-types";
import Concept from "./Concept";
import SubTitle from "../SubTitle";
import Water from "../Water";

import styles from "./Concepts.css";

const Concepts = ({ data }) => (
    <div className={styles.concepts} id="concepts">
        <Water />
        <SubTitle value="concepts" />
        <div className={styles.conceptsWrapper}>
            {
                data.map(conceptData => (
                    <Concept
                        key={conceptData.title}
                        data={conceptData}
                        className={styles.jsConcept}
                    />
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