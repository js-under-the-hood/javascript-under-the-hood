import React from "react";
import PropTypes from "prop-types";
import GitHubLogo from "./GitHubLogo";

import styles from "./GitHub.css";

const GitHub = ({ link }) => (
    <div className={styles.github}>
        <a className={styles.githubLink} href={link} target="_blank">
            <span className={styles.githubText}>GitHub</span>
            <GitHubLogo
                classNamePath={styles.githubLogoPath}
                classNameSVG={styles.githubLogoSVG}
            />
        </a>
    </div>
);

GitHub.propTypes = {
    link: PropTypes.string.isRequired,
};

export default GitHub;