import React, { Component } from  'react';
import PropTypes from 'prop-types';
import styles from './Facebook.css';

const Facebook = ({ onClick }) => (
    <div className={styles.facebookButton} onClick={onClick}>
    </div>
);

Facebook.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Facebook;