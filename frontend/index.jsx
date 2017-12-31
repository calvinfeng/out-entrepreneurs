import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import TalentPage from './components/TalentPage';
import TalentForm from './components/TalentForm';
import TeamPage from './components/TeamPage';
import TeamForm from './components/TeamForm';

import './index.scss';

const style = {
    margin: '12px'
};

class Application extends React.Component {
    state = {
        page: 'home'
    };

    createNavigateHandler = (pageName) => {
        return () => {
            this.setState({ page: pageName });
        }
    };

    handleClickHome = () => {
        this.setState({ page: 'home' });
    };

    handleClickTeam = () => {
        this.setState({ page: 'team' });
    };

    handleClickAddTeam = () => {
        this.setState({ page: 'team-form' });
    };

    handleClickTalent = () => {
        this.setState({ page: 'talent' });
    };

    handleClickAddTalent = () => {
        this.setState({ page: 'talent-form' });
    };

    get content() {
        switch (this.state.page) {
            case 'talent':
                return <TalentPage handleClickAddTalent={this.handleClickAddTalent} />;
            case 'talent-form':
                return <TalentForm handleClickHome={this.handleClickHome} />;
            case 'team':
                return <TeamPage handleClickAddTeam={this.handleClickAddTeam} />;
            case 'team-form':
                return <TeamForm handleClickHome={this.handleClickHome} handleClickTeam={this.handleClickTeam} />;
            default:
                return (
                    <section>
                        <RaisedButton label="looking for team" style={style} onClick={this.handleClickTeam} />
                        <RaisedButton label="looking for talent" style={style} onClick={this.handleClickTalent} />
                    </section>
                );
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                {this.content}
            </MuiThemeProvider>
        )
    }
}


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Application />, document.getElementById('react-application'));
});