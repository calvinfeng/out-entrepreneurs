import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    marginRight: 20
};

class TalentIndex extends React.Component {
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
                <Paper zDepth={1} className="talent-item">
                    <img src={"https://media-exp2.licdn.com/media/p/7/005/0a4/3ce/1084a80.jpg"} />
                    <div className="talent-info">
                      <p>{name}</p>
                    </div>
                </Paper>
            );
        })
    }

    render() {
        return (
            <section className="talents">
                <h1>Talents</h1>
                <FloatingActionButton style={style} onClick={this.props.handleClickAddTalent}>
                    <ContentAdd />
                </FloatingActionButton>
                {this.talentList}
            </section>
        );
    }
}

export default TalentIndex;
