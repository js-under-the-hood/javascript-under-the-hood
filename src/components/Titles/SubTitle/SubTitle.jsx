import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";

import "./SubTitle.css";

const SubTitle = ({ value }) => (
    <Title 
        className="subTitle"
        value={value}
        uppercase
    />
);

SubTitle.propTypes = {
    value: PropTypes.string.isRequired
};

export default SubTitle;