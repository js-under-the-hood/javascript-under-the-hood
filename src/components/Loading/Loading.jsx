import React from "react";

import styles from "./Loading.css";

const Loading = () => (
    <p className={styles.loading}>
        <span>Loading</span>
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
        <span className={styles.dot}>.</span>
    </p>
);

export default Loading;