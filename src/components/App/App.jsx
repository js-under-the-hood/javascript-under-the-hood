import React from "react";
import Atmosphere from "../Atmosphere";
import Hydrosphere from "../Hydrosphere";

import styles from "./App.css";
console.log(styles);
//import "./App.css";

const App = () => (
    <div className="app">
        <Atmosphere />
        <Hydrosphere />
    </div>
);

export default App;