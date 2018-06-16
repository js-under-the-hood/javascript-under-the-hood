import React from 'react';
import PropTypes from 'prop-types';
import styles from './Twitter.css';

const Twitter = ({onClick}) => (
    <div className={styles.twitterButton} onClick={onClick}>
    </div>
);

Twitter.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Twitter;