import React from 'react';
import PropTypes from 'prop-types';

const MemberPhoto = ({src, className}) => {
    return (
            <img alt='memberphoto' className={className} src={src} />
    );
};

MemberPhoto.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes,
};

export default MemberPhoto;