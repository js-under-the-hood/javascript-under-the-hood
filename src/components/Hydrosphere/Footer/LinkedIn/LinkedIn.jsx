import React from  'react';
import PropTypes from 'prop-types';
import styles from './LinkedIn.css';

const LinkedIn = ({ onClick }) => (
    <div className={styles.linkedInButton} onClick={onClick}>
    </div>
);

LinkedIn.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default LinkedIn;