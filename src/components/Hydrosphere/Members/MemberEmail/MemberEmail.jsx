import React from "react";
import PropTypes from "prop-types";
import Text from "../../../Text";

import './MemberEmail.css';

const MemberEmail = ({ email }) => {
    return (
        <div className="emailContainer">
            <Text value="email: " className="email"/>
            <Text value={email} className="emailValue"/>
        </div>
    );
};

MemberEmail.propTypes = {
    email: PropTypes.string.isRequired,
};

export default MemberEmail;