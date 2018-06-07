import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css'



const Menu = ({item1, item2}) => (
    <ul className="menu-bar">
        <a href="#">
            <li>{item1}</li>
        </a>
        <a href="#">
            <li>{item2}</li>
        </a>
    </ul>
);



Menu.PropTypes = {
    item1:PropTypes.string.isRequired,
    item2:PropTypes.string.isRequired,
};

export default Menu;


