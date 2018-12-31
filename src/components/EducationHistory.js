import React, {Component} from 'react'
import EduTitle from './EduTitle';

class EducationHistory extends Component {
  render() {
    const educationList = this.props.eduList;

    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">
          { 
          educationList.map((educationItem, index) => {
            return <EduTitle key={index}
              institute={educationItem.institute} 
              field={educationItem.fieldOfStudy} 
              dates={educationItem.dates} 
            />
          })
          }
        </div>
      </section>
    );
  }
}

export default EducationHistory;
