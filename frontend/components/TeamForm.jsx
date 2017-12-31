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
            this.props.handleClickTeam();
        }).catch((err) => {
            console.log(err);
        });
    };

    handleTeamCategoryChange = (e, idx, val) => {
        this.setState({ team_category: val });
    };

    handlePositionCategoryChange = (e, idx, val) => {
        this.setState({ position_category: val });
    };

    handleSchoolChange = (e, idx, val) => {
        this.setState({ school: val });
    };

    handleTeamNameChange = (e, val) => {
        this.setState({ team_name: val });
    };

    handlePositionTitleChange = (e, val) => {
        this.setState({ position_title: val });
    };

    handleContactInfoChange = (e, val) => {
        this.setState({ contact_info: val });
    };

    get teamCategoryItems() {
        return TeamCategories.map((category) => {
            return <MenuItem value={category} primaryText={category} />;
        });
    }

    get positionCategoryItems() {
        return PositionCategories.map((category) => {
            return <MenuItem value={category} primaryText={category} />;
        });
    }

    get schoolItems() {
        return Schools.map((school) => {
            return <MenuItem value={school} primaryText={school} />;
        });
    }

    render() {
        return (
            <section>
                <RaisedButton label="home" onClick={this.props.handleClickHome} />
                <form onSubmit={this.handleSubmit}>
                    <TextField hintText="Team Name" onChange={this.handleTeamNameChange} /><br />
                    <SelectField
                        floatingLabelText="Team Categories"
                        value={this.state.team_category}
                        onChange={this.handleTeamCategoryChange}>
                        {this.teamCategoryItems}
                    </SelectField><br />
                    <TextField hintText="Position Title" onChange={this.handlePositionTitleChange} /><br />
                    <SelectField
                        floatingLabelText="Position Categories"
                        value={this.state.position_category}
                        onChange={this.handlePositionCategoryChange}>
                        {this.positionCategoryItems}
                    </SelectField><br />
                    <TextField hintText="Contact Info" onChange={this.handleContactInfoChange} /><br />
                    <SelectField
                        floatingLabelText="Schools/Communities"
                        value={this.state.school}
                        onChange={this.handleSchoolChange}>
                        {this.schoolItems}
                    </SelectField><br />
                    <TextField hintText="Description" multiLine={true} rows={10} rowsMax={20}/><br />
                    <input type="submit" label="Submit" />
                </form>
            </section>
        );
    }
}

export default TeamForm;