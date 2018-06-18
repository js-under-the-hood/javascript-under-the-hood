import React from "react";
import Wave from "./Wave";
import Fishes from "./Fishes";
import Concepts from "./Concepts";
import ExplanationArea from "./ExplanationArea";
import Members from "./Members";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";
import { fishData, conceptsData, gitHubUsers, socials } from "../../data/hydrosphereData";

import styles from "./Hydrosphere.css";

const Hydrosphere = () => (
    <BrowserRouter>
        <div className={styles.hydrosphere}>
            <Wave containerClassName={styles.waterWave} frontWaveClassName={styles.frontWave} />
            <Fishes data={fishData} />
            <Concepts data={conceptsData} />
            <Route path="/callStack" component={ExplanationArea} />
            <Members gitHubUsers={gitHubUsers} />
            <Footer socials={socials}/>
        </div>
    </BrowserRouter>
);

export default Hydrosphere;