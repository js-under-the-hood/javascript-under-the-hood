import React from "react";
import PropTypes from "prop-types";
import { getComponentClassName } from "../../../../helpers";

import "./MemberPhoto.css";

const MemberPhoto = ({ src, className }) => {
    const memberClassName = getComponentClassName(["memberImg", className]);
    return <img alt="memberphoto" className={memberClassName} src={src} />
};

MemberPhoto.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
};

MemberPhoto.defaultProps = {
    className: "",
};

export default MemberPhoto;