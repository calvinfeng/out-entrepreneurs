import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import axios from 'axios';


const style = {
    marginRight: 20
};

class TalentIndex extends React.Component {
  state = { talents: [] };

  componentDidMount() {
    axios.get('/api/talents').then((res) => {
      this.setState({ talents: res.data });
    }).catch((err) => {
      console.log(err);
    })
  }

  get talentList() {
    return this.state.talents.map((individual) => {
      return (
        <Paper zDepth={1} className="talent-item" key={individual.ID}>
          <img src={"https://media-exp2.licdn.com/media/p/7/005/0a4/3ce/1084a80.jpg"} />
          <div className="talent-info">
            <p>Name: {individual.name}</p>
            <p>Talent: {individual.talent}</p>
            <p>Description: {individual.description}</p>
            <p>School: {individual.school}</p>
            <p>Contact Info: {individual.contact_info}</p>
          </div>
        </Paper>
      );
    });
  }

  render() {
      return (
          <section className="talents">
              <h1>Talents</h1>
              <FloatingActionButton style={style} onClick={this.props.handleNavigateToTalentForm}>
                  <ContentAdd />
              </FloatingActionButton>
              {this.talentList}
          </section>
      );
  }
}

export default TalentIndex;
