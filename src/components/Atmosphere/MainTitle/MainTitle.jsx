import React from "react";
import PropTypes from "prop-types";
import Title from "../../Title";

import { getComponentClassName } from "../../../helpers";
import "./MainTitle.css";

const MainTitle = ({ value, containerClassName }) => {
    const pureLines = value.split("\\n").map(line => line.trim());
    const className = getComponentClassName(["mainTitleContainer", containerClassName]);
    return (
        <div className={className}>
            {
                pureLines.map(value => 
                    <Title
                        key={value}
                        className="mainTitle"
                        value={value}
                        uppercase
                    />   
                )
            }
        </div>
    )
};

MainTitle.propTypes = {
    value: PropTypes.string.isRequired
};

export default MainTitle;