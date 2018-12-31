import React, {Component} from 'react';
import Skill from './Skill';

class SkillsList extends Component {
  render() {
    const skillsList = this.props.skills;
    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          { 
            skillsList.map((skillItem, index) => <Skill key={index} skill={skillItem} />)
          }
        </div>
      </section>
    );
  }
}

export default SkillsList;
