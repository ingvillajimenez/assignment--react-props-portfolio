import React, { Component} from 'react';
import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';
import SkillsList from './components/SkillsList';
import EducationHistory from './components/EducationHistory';
import WorkHistory from './components/WorkHistory';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortfolioFixed />
        <PortfolioContent />
        <SkillsList skills={this.props.skills} />
        <EducationHistory eduList={this.props.eduList} />
        <WorkHistory jobsList={this.props.jobsList} />
      </div>
    );
  }
}

export default App;
