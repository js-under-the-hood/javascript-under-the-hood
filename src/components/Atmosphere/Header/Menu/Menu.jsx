import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "../MenuItem";

import './Menu.css';

const Menu = ({ items }) => (
    <nav className="menu">
        <ul className="menuItems">
            {
                items.map(({ value, href }) => (
                    <MenuItem key={value} link={href} value={value} />
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