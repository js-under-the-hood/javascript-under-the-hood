import React from "react";
import Header from "./Header";
import Iceberg from "./Iceberg";
import MainTitle from "./MainTitle";
import { headerData, mainTitleValue } from "../../data/atmosphereData";

import "./Atmosphere.css";

const Atmosphere = () => (
    <div className="atmosphere">
        <Iceberg className="icebergJS" />
        <Header data={headerData} />
        <MainTitle containerClassName="atmosphereTitle" value={mainTitleValue} />
    </div>
);

export default Atmosphere;