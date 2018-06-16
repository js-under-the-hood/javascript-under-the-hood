import React, { Component } from "react";
import Text from "../../Text";
import Facebook from './Facebook';
import Twitter from './Twitter';
import LinkedIn from './LinkedIn';
import GooglePlus from './GooglePlus';
import {socials} from '../../../data/hydrosphereData';

import styles from "./Footer.css";

class Footer extends Component {

    shareHandler = (href) => {
        window.open(href);
    };
    
    render() {
        return (
            <div className={styles.footer}>
                <Facebook onClick={() => this.shareHandler(socials.facebook)} />
                <Twitter onClick={() => this.shareHandler(socials.twitter)} />
                <LinkedIn onClick={() => this.shareHandler(socials.linkedin)} />
                <GooglePlus onClick={() => this.shareHandler(socials.google)} />
            </div>
        );
    }
    
};

export default Footer;