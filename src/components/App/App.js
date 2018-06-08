import React from "react";
import Header from "../HeaderContainer";
import headerData from "../../data/headerData";

import "./App.css";

const App = () => (
    <div className="app">
        <Header data={headerData}/>
    </div>
);

export default App;