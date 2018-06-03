import React from "react";
import PropTypes from "prop-types";
import Title from "../../Title";

import "./MainTitle.css";

const MainTitle = ({ value }) => {
    const pureLines = value.split("\\n").map(line => line.trim());
    
    return (
        <div className="mainTitleContainer">
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