import React, {Component} from 'react'
import Job from './Job';

class WorkHistory extends Component {
  render() {
    const jobsList = this.props.jobsList;

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          {
          jobsList.map((jobsItem, index) => {
            return <Job key={index}
              title={jobsItem.title}
              company={jobsItem.company}
              description={jobsItem.description}
              start={jobsItem.years.start}
              end={jobsItem.years.end}
            />
          })
          }
        </div>
      </section>
    );
  }
}

export default WorkHistory;
