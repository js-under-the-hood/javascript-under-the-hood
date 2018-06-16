import React from "react";
import PropTypes from "prop-types";

import styles from "./MenuItem.css";

const MenuItem = ({ link, value }) => (
    <li className={styles.menuItem}>
        <a href={link}>{value}</a>
    </li>
);

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default MenuItem;