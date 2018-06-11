import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Member from "../Member";
import SubTitle from "../../SubTitle";
import Water from "../../Water";
import Loading from "../../../Loading";
import { gitHubUserFetch } from "../../../../API";

import "./Members.css";

class Members extends Component {
    state = {
        isLoading: true,
        team: []
    };

    componentDidMount() {
        const team = [...this.state.team];
        const { gitHubUsers } = this.props;
        const usersCount = gitHubUsers.length;
        let successFetchCount = 0;

        fetch("http://5b1e64c24d4fc00014b07db2.mockapi.io/token")
            .then(response => response.json())
            .then(({token}) => {
                gitHubUsers.map(username => (
                    gitHubUserFetch(username, token)
                        .then(response => response.json())
                        .then(member => {
                            successFetchCount++;
                            team.push(member);
                            if (successFetchCount === usersCount) {
                                this.setState({ team, isLoading: false });
                            }
                        })       
                ));
            })
    }
    
    render() {
        const { team, isLoading } = this.state;

        return (
            <div className="ourTeam" id="ourTeam">
                <Water />
                <SubTitle value="our team" />
                <div className="membersWrapper">
                    {
                        isLoading ? <Loading /> : (
                            team.map((member, i) => (
                                <Fragment key={member.id}>
                                    { i % 2 === 0 ? <div className="newLine"></div> : null }
                                    <Member data={member}/>
                                </Fragment> 
                            ))
                        )
                    }
                </div>
            </div>      
        );
    }
}

Members.propTypes = {
    gitHubUsers: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
};

export default Members;
