import React, { Component } from 'react';
import gitHubUsers from './gitHubUsers'
import Member from '../Member';

class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: []
        };
    }

    componentDidMount() {
        let { team } = this.state;
        gitHubUsers.map(user => fetch(`https://api.github.com/users/${user.username}`)
                        .then(resp => resp.json())
                        .then(member =>  team.push(member))
                        .then(resp => this.setState({resp})));        
    }  
    
    render() {
        const {team} = this.state;
        team.map(member => {
            for (let i = 0; i < gitHubUsers.length; i++) {
                if (gitHubUsers[i].username === member.login) {
                    member.email = gitHubUsers[i].email;
                }
        }})
        return (
            <div>
                <h1>OUR TEAM</h1>
                {
                    team.map(member => <Member data={member} />)
                }
            </div>       
        );
    }
}

export default Members;
