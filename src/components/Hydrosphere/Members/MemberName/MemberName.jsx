import React from "react";
import PropTypes from "prop-types";
import Title from "../../../Title";

import "./MemberName.css";

const MemberName = ({ value }) => (
    <Title
        className="memberName"
        value={value}
        uppercase
    />
);

MemberName.propTypes = {
    value: PropTypes.string.isRequired
};

export default MemberName;