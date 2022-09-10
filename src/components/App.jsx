import { useState } from "react";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from "components/Notification";
import { GlobalStyles } from "./GlobalStyles";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    if (type === "good") {
      setGood(good + 1);
    }
    if (type === "neutral") {
      setNeutral(neutral + 1);
    }
    if (type === "bad") {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good / countTotalFeedback() * 100) + '%';
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback = { handleFeedback }/>
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) : (<Notification message="There is no feedback" />)
        }
      </Section>
      <GlobalStyles/>
    </div>
  );
};
