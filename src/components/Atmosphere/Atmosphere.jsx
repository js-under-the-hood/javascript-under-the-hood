import React from "react";
import Header from "./Header";
import Iceberg from "./Iceberg";
import MainTitle from "./MainTitle";
import { headerData, mainTitleValue } from "../../data/atmosphereData";

import styles from "./Atmosphere.css";

const Atmosphere = () => (
    <div className={styles.atmosphere}>
        <Iceberg className={styles.icebergJS} />
        <Header data={headerData} />
        <MainTitle
            containerClassName={styles.atmosphereTitle}
            value={mainTitleValue}
        />
    </div>
);

export default Atmosphere;