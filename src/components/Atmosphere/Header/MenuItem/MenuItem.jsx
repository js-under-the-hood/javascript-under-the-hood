import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

import styles from "./MenuItem.css";

const MenuItem = ({ link, value }) => (
    <li className={styles.menuItem}>
        <Link to={link} smooth={true} duration={500}>
            {value}
        </Link>
    </li>
);

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default MenuItem;