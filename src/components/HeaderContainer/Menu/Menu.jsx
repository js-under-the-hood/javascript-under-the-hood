import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

const Menu = ({ items }) => (
    <nav className="navigation">
        <ul className="menuBar">
            {
                items.map(({ value, href }) => (
                    <li key={value} className="menuItem">
                        <a className="menuLink" href={href}>{value}</a>
                    </li>
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