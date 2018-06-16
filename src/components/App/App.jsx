import React from "react";
import Atmosphere from "../Atmosphere";
import Hydrosphere from "../Hydrosphere";

import styles from "./App.css";

const App = () => (
    <div className={styles.app}>
        <Atmosphere />
        <Hydrosphere />
    </div>
);

export default App;