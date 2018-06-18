import React from "react";
import PropTypes from "prop-types";
import Text from "../../Text";
import Social from "./Social";

import styles from "./Footer.css";

const Footer = ({ socials }) => (
    <div className={styles.footer}>
        <Text value="Share with friends" className={styles.footerText} />
        <div className={styles.icons}>
        { 
            socials.map(item => (
                <Social 
                    key={item.className} 
                    className={styles[item.className]} 
                    onClick={() => window.open(item.link)} 
                />
            ))
        }
        </div>
    </div>
);

Footer.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.string,
            link: PropTypes.string,
        }).isRequired,
    ).isRequired,
};

export default Footer;