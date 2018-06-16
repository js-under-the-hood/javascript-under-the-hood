import React from  'react';
import PropTypes from 'prop-types';
import styles from './GooglePlus.css';

const GooglePlus = ({ onClick }) => (
    <div className={styles.googleButton} onClick={onClick}>
    </div>
);

GooglePlus.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default GooglePlus;