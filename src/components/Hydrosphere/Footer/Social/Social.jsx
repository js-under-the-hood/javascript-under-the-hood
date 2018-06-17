import React, { Component } from  'react';
import PropTypes from 'prop-types';
import styles from './Social.css';

const Social = ({ onClick, className }) => (
    <div className={`${styles.shareButton} ${className}`} onClick={onClick}>
    </div>
);

Social.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Social;