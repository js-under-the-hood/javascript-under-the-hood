import React from "react";
import PropTypes from "prop-types";

import styles from "./ConceptButton.css";

const ConceptButton = ({ href }) => (
    <div className={styles.conceptButton}>
        <a href={href}>Try yourself</a>
    </div>
);

ConceptButton.propTypes = {
    href: PropTypes.string.isRequired,
};

export default ConceptButton;