import React from "react";
import PropTypes from "prop-types";
import Title from "../../../Title";

import styles from "./ConceptTitle.css";

const ConceptTitle = ({ value }) => (
    <Title
        className={styles.conceptTitle}
        value={value}
    />
);

ConceptTitle.propTypes = {
    value: PropTypes.string.isRequired
};

export default ConceptTitle;