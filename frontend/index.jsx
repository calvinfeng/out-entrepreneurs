import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import TalentIndex from './components/TalentIndex';
import TalentForm from './components/TalentForm';
import TeamIndex from './components/TeamIndex';
import TeamForm from './components/TeamForm';
import About from './components/About';
import {Tabs, Tab} from 'material-ui/Tabs';

import './index.scss';

const style = {
   margin: '1rem'
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

  handleChange = (value) => {
    this.setState({ page: value });
  };

  get contentBody() {
      switch (this.state.page) {
          case 'talents':
            return <TalentIndex handleNavigateToTalentForm={this.createNavigateHandler('talent-form')} />;
          case 'talent-form':
            return <TalentForm handleNavigateToTalents={this.createNavigateHandler('talents')} />;
          case 'teams':
            return <TeamIndex handleNavigateToTeamForm={this.createNavigateHandler('team-form')} />;
          case 'team-form':
            return (
              <TeamForm
                handleNavigateToHome={this.createNavigateHandler('home')}
                handleNavigateToTeams={this.createNavigateHandler('teams')} />
            );
          case 'about':
            return <About />;
          default:
              return (
                  <section className="home">
                      <RaisedButton
                        style={style}
                        label="looking for teams"
                        onClick={this.createNavigateHandler('teams')} />
                      <RaisedButton
                        style={style}
                        label="looking for talents"
                        onClick={this.createNavigateHandler('talents')} />
                  </section>
              );
      }
  }

  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: '#ffb31a',
        primary2Color: '#e69900',
        textColor: '#e69900'
      }
    });

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <article className="index">
            <Tabs onChange={this.handleChange} value={this.state.page}>
              <Tab label="Home" value={'home'} />
              <Tab label="Teams" value={'teams'} />
              <Tab label="Talents" value={'talents'} />
              <Tab label="About" value={'about'} />
            </Tabs>
            <section className="content-container">
              {this.contentBody}
            </section>
            <section className="footer">
              &copy; 2017 by Out Entrepreneurs. For questions, contact us at lisidao@gmail.com
            </section>
          </article>
        </MuiThemeProvider>
    );
  }
}


document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Application />, document.getElementById('react-application'));
});
