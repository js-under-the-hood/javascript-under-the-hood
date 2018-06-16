import React from "react";
import Wave from "./Wave";
import Fishes from "./Fishes";
import Concepts from "./Concepts";
import ExplanationArea from "./ExplanationArea";
import Members from "./Members";
import Footer from "./Footer";
import { fishData, conceptsData, gitHubUsers } from "../../data/hydrosphereData";

import styles from "./Hydrosphere.css";

const Hydrosphere = () => (
    <div className={styles.hydrosphere}>
        <Wave containerClassName={styles.waterWave} frontWaveClassName={styles.frontWave} />
        <Fishes data={fishData} />
        <Concepts data={conceptsData} />
        <ExplanationArea />
        <Members gitHubUsers={gitHubUsers} />
        <Footer />
    </div>
);

export default Hydrosphere;