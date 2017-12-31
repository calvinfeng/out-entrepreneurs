import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';


const TeamCategories = ['Science', 'Mobile App'];
const PositionCategories = ['Business', 'Marketing', 'Computer Science', 'Electrical Engineer'];
const Schools = ['UCSD', 'SDSU', 'USD', 'Point Loma', 'Other'];

class TeamForm extends React.Component {
    state = {
        team_category: TeamCategories[0],
        position_category: PositionCategories[0],
        school: Schools[0]
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/teams", this.state).then((res) => {
            this.props.handleNavigateToTeam();
        }).catch((err) => {
            console.log(err);
        });
    };

    createSelectFieldChangeHandler = (fieldName) => {
      return (e, idx, val) => {
        console.log(val);
        const newState = Object.assign({}, this.state);
        newState[fieldName] = val;
        this.setState(newState);
      }
    }

    createTextFieldChangeHandler = (fieldName) => {
      return (e, val) => {
        console.log(val);
        const newState = Object.assign({}, this.state);
        newState[fieldName] = val;
        this.setState(newState);
      }
    }

    getMenuItemsByList = (list) => {
      return list.map((itemName) => {
        return <MenuItem value={itemName} primaryText={itemName} />;
      })
    };

    render() {
      return (
        <section className="team-form">
          <form onSubmit={this.handleSubmit}>
            <TextField hintText="Team Name" onChange={this.createTextFieldChangeHandler('team_name')} />
            <br />
            <SelectField
              floatingLabelText="Team Categories"
              value={this.state.team_category}
              onChange={this.createSelectFieldChangeHandler('team_category')}>
              {this.getMenuItemsByList(TeamCategories)}
            </SelectField>
            <br />
            <TextField hintText="Position Title" onChange={this.createTextFieldChangeHandler('position_title')} />
            <br />
            <SelectField
              floatingLabelText="Position Categories"
              value={this.state.position_category}
              onChange={this.createSelectFieldChangeHandler('position_category')}>
              {this.getMenuItemsByList(PositionCategories)}
            </SelectField>
            <br />
            <TextField hintText="Contact Info" onChange={this.createTextFieldChangeHandler('contact_info')} /><br />
            <SelectField
                floatingLabelText="Schools/Communities"
                value={this.state.school}
                onChange={this.createSelectFieldChangeHandler('school')}>
                {this.getMenuItemsByList(Schools)}
            </SelectField>
            <br />
            <TextField
              hintText="Description"
              multiLine={true}
              rows={10}
              rowsMax={20}
              onChange={this.createTextFieldChangeHandler('description')} />
            <br />
            <input type="submit" label="Submit" />
          </form>
        </section>
      );
    }
}

export default TeamForm;
