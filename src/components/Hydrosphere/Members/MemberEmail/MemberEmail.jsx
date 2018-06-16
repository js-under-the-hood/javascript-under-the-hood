import React from "react";
import PropTypes from "prop-types";
import Text from "../../../Text";

import styles from "./MemberEmail.css";

const MemberEmail = ({ email }) => {
    return (
        <div className={styles.emailContainer}>
            <Text value="email: " className={styles.email}/>
            <Text value={email} className={styles.emailValue}/>
        </div>
    );
};

MemberEmail.propTypes = {
    email: PropTypes.string.isRequired,
};

export default MemberEmail;