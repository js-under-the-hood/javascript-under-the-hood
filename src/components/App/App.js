import React from "react";
import Header from "../HeaderContainer";
import Footer from "../FooterContainer";
import headerData from "../../data/headerData";

import "./App.css";

const App = () => (
    <div className="app">
        <Header data={headerData}/>
        <Footer />
    </div>
);

export default App;