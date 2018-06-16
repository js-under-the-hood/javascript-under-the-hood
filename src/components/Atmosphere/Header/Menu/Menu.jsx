import React from "react";
import PropTypes from "prop-types";
import MenuItem from "../MenuItem";

import styles from "./Menu.css";

const Menu = ({ items }) => (
    <nav className={styles.menu}>
        <ul className={styles.menuItems}>
            {
                items.map(({ value, href }) => (
                    <MenuItem
                        key={value}
                        link={href}
                        value={value}
                    />
                ))
            }
        </ul>
    </nav>
);

Menu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Menu;