import React from "react";
import PropTypes from "prop-types";
import MemberPhoto from "../MemberPhoto";
import MemberName from "../MemberName";
import MemberEmail from "../MemberEmail";
import MemberGitHubAccount from "../MemberGitHubAccount";

import "./Member.css";

const Member = ({ data }) => (
    <div className="member">
        <MemberPhoto src={data.avatar_url} className="memberPhoto" />
        <div className="memberInfoContainer"> 
            <MemberName value={data.name || "js ninja"} />
            <MemberEmail email={data.email || "js_team@jsunderthehood.com"} />
            <MemberGitHubAccount href={data.html_url} className="gitHubAccount"/>
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