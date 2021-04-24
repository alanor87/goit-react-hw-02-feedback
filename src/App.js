import React from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onFeedbackClick = (event) => {
    const feedback = event.target.name;
    this.setState(prevState => { return { [feedback]: prevState[feedback] + 1 } });
  }

  countTotalFeedback = () => {
    const totalVotesArray = Object.values(this.state);
    return totalVotesArray.reduce((acc, el) => acc + el, 0);
  }

  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) return null;
    const positivePercent = Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    return positivePercent;
  }

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onFeedbackClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
            </Statistics> :
            <Notification message="No feedback given"/>}
          
        </Section>
      </div>
    );
  }

}

export default App;
