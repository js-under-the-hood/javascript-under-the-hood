import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";

import "./MemberTitle.css";

const MemberTitle = ({ value }) => (
    <Title
        className="conceptTitle"
        value={value}
        uppercase
    />
);

MemberTitle.propTypes = {
    value: PropTypes.string.isRequired
};

export default MemberTitle;