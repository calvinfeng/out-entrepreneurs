import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    marginRight: 20
};

class TalentPage extends React.Component {
    state = {
        talents: [
            "Calvin Feng",
            "Sidao Li",
            "Carmen To"
        ]
    };

    get talentList() {
        return this.state.talents.map((name) => {
            return (
                <li>
                    <img src={"https://media-exp2.licdn.com/media/p/7/005/0a4/3ce/1084a80.jpg"} />
                    <p>{name}</p>
                </li>
            );
        })
    }

    render() {
        return (
            <section>
                <h1>Talents</h1>
                <FloatingActionButton style={style} onClick={this.props.handleClickAddTalent}>
                    <ContentAdd />
                </FloatingActionButton>
                <ul>
                    {this.talentList}
                </ul>
            </section>
        );
    }
}

export default TalentPage;