import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

const Schools = ['UCSD', 'SDSU', 'USD', 'Point Loma', 'Other'];
const Talents = ['Business', 'Marketing', 'Computer Science', 'Electrical Engineer'];

class TalentForm extends React.Component {
  state = {
    talent: Talents[0],
    school: Schools[0]
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post("/api/talents", this.state).then((res) => {
      this.props.handleNavigateToTalents();
    }).catch((err) => {
      console.log(err);
    });
  };

  createSelectFieldChangeHandler = (fieldName) => {
    return (e, idx, val) => {
      const newState = Object.assign({}, this.state);
      newState[fieldName] = val;
      this.setState(newState);
    };
  };

  createTextFieldChangeHandler = (fieldName) => {
    return (e, val) => {
      const newState = Object.assign({}, this.state);
      newState[fieldName] = val;
      this.setState(newState);
    };
  };

  getMenuItemsByList = (list) => {
    return list.map((itemName) => {
      return <MenuItem value={itemName} primaryText={itemName} key={itemName}/>;
    });
  };

  render() {
    return (
      <section className="talent-form">
        <form onSubmit={this.handleSubmit}>
          <SelectField
            floatingLabelText="Talent"
            value={this.state.talent}
            onChange={this.createSelectFieldChangeHandler('talent')}>
            {this.getMenuItemsByList(Talents)}
          </SelectField>
          <br />
          <TextField hintText="Name" onChange={this.createTextFieldChangeHandler('name')} />
          <br />
          <TextField hintText="Description" onChange={this.createTextFieldChangeHandler('description')} />
          <br />
          <TextField hintText="Contact Info" onChange={this.createTextFieldChangeHandler('contact_info')} />
          <br />
          <SelectField
            floatingLabelText="Schools/Communities"
            value={this.state.school}
            onChange={this.createSelectFieldChangeHandler('school')}>
            {this.getMenuItemsByList(Schools)}
          </SelectField>
          <br />
          <input type="submit" label="Submit" />
        </form>
      </section>
    );
  }
}

export default TalentForm;
