import React, { Component } from 'react';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOpt from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Box from './Box/Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // clickOnBtnGood = () => {
  //   this.setState(prevState => {
  //     return { good: prevState.good + 1 };
  //   });
  // };

  // clickOnBtnBad = () => {
  //   this.setState(prevState => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  onLeaveFeedback = e => {
    const btn = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return { [btn]: prevState[btn] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good * 100) / this.countTotalFeedback();
  };

  render() {
    const {
      state: { good, neutral, bad },
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
    } = this;
    return (
      <Box bg="beige" color="green">
        <Section title="Statistics">
          <FeedbackOpt
            options={Object.keys(this.state)}
            onChoiceFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Please leave feedback">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
