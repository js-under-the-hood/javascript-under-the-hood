import React, { Component } from "react";
import Text from "../../Text";
import Social from './Social';
import {socials} from '../../../data/hydrosphereData';

import styles from "./Footer.css";

class Footer extends Component {

    shareHandler = (href) => {
        window.open(href);
    };
    
    render() {
        return (
            <div className={styles.footer}>
               { 
                    socials.map(item => (
                        <Social key={item.className} className={styles[item.className]} onClick={() => this.shareHandler(item.link)} />
                    ))
                }
            </div>
        );
    }
    
};

export default Footer;