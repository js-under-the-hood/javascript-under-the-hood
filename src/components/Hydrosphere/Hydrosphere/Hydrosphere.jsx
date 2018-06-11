import React from "react";
import Wave from "../Wave";
import Fishes from "../Fishes";
import Concepts from "../Concepts";
import Members from "../Members";
import Footer from "../Footer";
import { fishData, conceptsData, gitHubUsers } from "../../../data/hydrosphereData";

import "./Hydrosphere.css";

const Hydrosphere = () => (
    <div className="hydrosphere">
        <Wave containerClassName="waterWave" frontWaveClassName="frontWave" />
        <Fishes data={fishData} />
        <Concepts data={conceptsData} />
        <Members gitHubUsers={gitHubUsers} />
        <Footer />
    </div>
);

export default Hydrosphere;