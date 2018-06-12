import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import GitHub from "../Github";

import './Header.css'

const Header = ({ data }) => (
    <header className="header">
        <Menu items={data.menuItems} />
        <GitHub link={data.gitHubLink} />
        
    </header>

);

Header.propTypes = {
    data: PropTypes.shape({
        menuItems: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
        gitHubLink: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;