import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import axios from 'axios';


class TalentIndex extends React.Component {
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
          <Paper zDepth={1} className="team-item" key={team.ID}>
            <p>Name: {team.team_name}</p>
            <p>Team: {team.team_category}</p>
            <p>Position Title: {team.position_title}</p>
            <p>Position Category: {team.position_category}</p>
            <p>School: {team.school}</p>
            <p>Description: {team.description}</p>
            <p>Contact Info: {team.contact_info}</p>
          </Paper>
        );
      });
    }

    render() {
        return (
            <section className="teams">
                <h1>Teams</h1>
                <FloatingActionButton onClick={this.props.handleNavigateToTeamForm}>
                    <ContentAdd />
                </FloatingActionButton>
                {this.teamList}
            </section>
        );
    }
}

export default TalentIndex;
