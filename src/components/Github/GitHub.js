import React from 'react';
import PropTypes from 'prop-types';
import logo from './gitHub.svg';
import './GitHub.css'



const GitHub = ({text}) => (

    <div className="github-logo">
        <a href="https://github.com/" target="_blank">
            <span>{text}</span>
            <img src={logo} alt={logo}/>
        </a>

    </div>
);



GitHub.PropTypes = {
    text:PropTypes.string.isRequired,

};

export default GitHub;


