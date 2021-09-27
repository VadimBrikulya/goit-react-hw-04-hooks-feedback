
import { useState } from 'react';

import Statistics from "./Components/Statictics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

import "./index.css";
import "./App.css";
import Wrap from "./App.styled";

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);


	countTotalFeedback = () => {		
		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};
	
	 const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };



	return (
		<Wrap>
			<Section title="Please leave feedback:">
				<FeedbackOptions options={objKey} onLeaveFeedback={onLeaveFeedback} />
			</Section>

			{countTotalFeedback() ? (
				<Notification message="No feedback given" />
			) : (
				<Section title="Statistics">
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positivePercentage={positivePercentage}
					/>
				</Section>
			)}
		</ Wrap>
	);
}

export default App;

