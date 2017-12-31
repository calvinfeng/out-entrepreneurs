import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import axios from 'axios';

const style = {
    marginRight: 20
};

class TeamPage extends React.Component {
    state = { teams: [] };

    componentDidMount() {
        axios.get('/api/teams').then((res) => {
            this.setState({ teams: res.data });
        }).catch((err) => {
            console.log(err);
        })
    }

    get teamList() {
        return this.state.teams.map((team) => {
            return (
                <li>
                    <img src={"https://media-exp2.licdn.com/media/p/7/005/0a4/3ce/1084a80.jpg"} />
                    <p>Name: {team.team_name}</p>
                    <p>Team: {team.team_category}</p>
                    <p>Position Title: {team.position_title}</p>
                    <p>Position Category: {team.position_category}</p>
                    <p>School: {team.school}</p>
                    <p>Description: {team.description}</p>
                    <p>Contact Info: {team.contact_info}</p>
                </li>
            );
        })
    }

    render() {
        return (
            <section>
                <h1>Teams</h1>
                <FloatingActionButton style={style} onClick={this.props.handleClickAddTeam}>
                    <ContentAdd />
                </FloatingActionButton>
                <ul>
                    {this.teamList}
                </ul>
            </section>
        );
    }
}

export default TeamPage;