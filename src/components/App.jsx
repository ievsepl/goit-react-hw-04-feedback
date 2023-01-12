import React, { useState } from 'react';

import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOpt from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Box from './Box/Box';
// import { useSetFeedback } from 'hooks/setFeedback';
const feedbackList = [
  { id: 'good', title: 'Good', value: 0 },
  { id: 'bad', title: 'Bad', value: 0 },
  { id: 'neutral', title: 'Bad', value: 0 },
];
export const App = () => {
  const [good, setGood] = useState(feedbackList[0].value);
  const [neutral, setNeutral] = useState(feedbackList[1].value);
  const [bad, setBad] = useState(feedbackList[2].value);

  console.log(good);
  const handleFeedback = nameFeedback => {
    if (nameFeedback === 'good') {
      setGood(prev => prev + 1);
    }
    if (nameFeedback === 'neutral') {
      setNeutral(prev => prev + 1);
    }
    if (nameFeedback === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good * 100) / countTotalFeedback();
  };

  // //
  //   const [feedback, setFeedback] = useState(feedbackList);
  //   // console.log(feedbackList);
  //   console.log(feedback);

  //   // const [neutral, setNeutral] = useState(0);
  //   // const [bad, setBad] = useState(0);

  //   const handleFeedback = e => {
  //     const { name } = e.target;
  //     console.log(name);
  //     feedback.map(item =>
  //       setFeedback(prev => ({ ...prev, [name]: prev[name] + 1 }))
  //     );
  //     // console.log(nameFeedback);
  //   };

  //   const countTotalFeedback = () => {
  //     // feedback.map(item=>)
  //     // feedback.reduce((total, item) => total + item.value, 0);
  //     // return good + neutral + bad;
  //   };

  //   const countPositiveFeedbackPercentage = () => {
  //     // return (feedback.value[0] * 100) / countTotalFeedback();
  //   };

  //
  //
  return (
    <Box bg="beige" color="green">
      <Section title="Statistics">
        <FeedbackOpt options={feedbackList} onChoiceFeedback={handleFeedback} />
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
};
