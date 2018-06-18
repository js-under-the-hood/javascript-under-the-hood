import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./ConceptButton.css";

const ConceptButton = ({ href }) => (
    <div className={styles.conceptButton}>
        <Link to={`/${href}`}>
            Try yourself
        </Link>
    </div>
);

ConceptButton.propTypes = {
    href: PropTypes.string.isRequired,
};

export default ConceptButton;