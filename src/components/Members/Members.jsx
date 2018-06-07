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
        gitHubUsers.map(username => fetch(`https://api.github.com/users/${username}`)
                        .then(resp => resp.json())
                        .then(member =>  team.push(member))
                        .then(resp => this.setState({resp})));        
    }  
    
    render() {
        const {team} = this.state;
        return (
            <div>
                {
                    team.map(member => <Member data={member} />
                    )
                }
            </div>       
        );
    }
}

export default Members;
