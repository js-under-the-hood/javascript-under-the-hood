import React from 'react';
import PropTypes from 'prop-types';
import GitHubLogo from "./GitHubLogo";

import './GitHub.css'

const GitHub = ({ link }) => (
    <div className="github">
        <a className="githubLink" href={link} target="_blank">
            <span className="githubText">GitHub</span>
            <GitHubLogo classNamePath="githubLogoPath" classNameSVG="githubLogoSVG"/>
        </a>
    </div>
);

GitHub.propTypes = {
    link: PropTypes.string.isRequired,
};

export default GitHub;