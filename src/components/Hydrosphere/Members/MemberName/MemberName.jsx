import React from "react";
import PropTypes from "prop-types";
import Title from "../../../Title";

import styles from "./MemberName.css";

const MemberName = ({ value }) => (
    <Title
        className={styles.memberName}
        value={value}
        uppercase
    />
);

MemberName.propTypes = {
    value: PropTypes.string.isRequired
};

export default MemberName;