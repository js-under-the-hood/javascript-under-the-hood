import React from 'react';
import Menu from '../Menu/Menu.js';
import GitHub from '../Github/GitHub.js';
import './Section.css'



const Section = () => (
    <div className="header-section">
       <Menu item1="concepts" item2="our team"  />
        <GitHub text="GitHub" />


    </div>
);


export default Section;


