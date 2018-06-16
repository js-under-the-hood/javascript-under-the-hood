import React from "react";
import PropTypes from "prop-types";
import Title from "../../Title";

import styles from "./SubTitle.css";

const SubTitle = ({ value }) => (
    <Title 
        className={styles.subTitle}
        value={value}
        uppercase
    />
);

SubTitle.propTypes = {
    value: PropTypes.string.isRequired,
};

export default SubTitle;