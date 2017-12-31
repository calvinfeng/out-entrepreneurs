import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class TalentForm extends React.Component {
    state = {
        talentValue: 1,
        schoolValue: 1
    };

    handleSubmit = (e) => {
        alert('Submitting form now!');
        e.preventDefault();
    };

    handleChange = (e) => {
        console.log(e);
    };

    render() {
        return (
            <section>
                <RaisedButton label="home" onClick={this.props.handleClickHome} />
                <form onSubmit={this.handleSubmit}>
                    <SelectField floatingLabelText="Talent" value={this.state.talentValue} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Business" />
                        <MenuItem value={2} primaryText="Marketing" />
                        <MenuItem value={3} primaryText="Computer Science" />
                        <MenuItem value={4} primaryText="Electrical Engineer" />
                    </SelectField><br />
                    <TextField hintText="Name" /><br />
                    <TextField hintText="Description" /><br />
                    <TextField hintText="Contact Info"/><br />
                    <SelectField floatingLabelText="Schools/Communities" value={this.state.schoolValue} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="UCSD" />
                        <MenuItem value={2} primaryText="SDSU" />
                        <MenuItem value={3} primaryText="USD" />
                        <MenuItem value={4} primaryText="Point Loma" />
                        <MenuItem value={5} primaryText="Other" />
                    </SelectField><br />
                    <TextField hintText="Description"/><br />
                    <input type="submit" label="Submit" />
                </form>
            </section>
        );
    }
}

export default TalentForm;