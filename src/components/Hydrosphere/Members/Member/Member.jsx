import React from "react";
import PropTypes from "prop-types";
import MemberPhoto from "../MemberPhoto";
import MemberName from "../MemberName";
import MemberEmail from "../MemberEmail";
import MemberGitHubAccount from "../MemberGitHubAccount";

import styles from "./Member.css";

const Member = ({ data }) => (
    <div className={styles.member}>
        <MemberPhoto src={data.avatar_url} className={styles.memberPhoto} />
        <div className={styles.memberInfoContainer}> 
            <MemberName value={data.name || "js ninja"} />
            <MemberEmail email={data.email || "js_team@jsunderthehood.com"} />
            <MemberGitHubAccount href={data.html_url} className={styles.gitHubAccount}/>
        </div>
    </div>
);

Member.propTypes = {
    data: PropTypes.shape({
        avatar_url: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        html_url: PropTypes.string,
    }).isRequired,
};

export default Member;