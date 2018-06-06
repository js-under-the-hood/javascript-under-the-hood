import React from 'react';
import CallStack from "../CallStack";
import { callStackData } from "../../data";

import './App.css';

const App = () => (
    <div className="app">
        <CallStack data={callStackData} />
    </div>
);

export default App;