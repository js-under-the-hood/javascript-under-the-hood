import React from "react";
import PropTypes from "prop-types";

import { getComponentClassName } from "../../../helpers";
import "./Iceberg.css";

const Iceberg = ({ className }) => {
    const icebergClassName = getComponentClassName(["iceberg", className]);
    return <div className={icebergClassName} />
};

Iceberg.propTypes = {
    className: PropTypes.string,
};

Iceberg.defaultProps = {
    className: "",
};

export default Iceberg;