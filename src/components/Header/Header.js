import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section.js';


import './Header.css'


class Header extends Component {
    render() {
        return (
            <div>
              <Section />

            </div>
        );
    }
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
    ClassName:PropTypes.string.isRequired,
}

export default Header;


