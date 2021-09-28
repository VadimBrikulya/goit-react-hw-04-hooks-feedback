
import React, { useState } from "react";

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

	const onLeaveFeedback = (options) => {
		switch (options) {
			case "good":
				setGood((stateGood) => stateGood + 1);
				break;

			case "neutral":
				setNeutral((stateNeutral) => stateNeutral + 1);
				break;

			case "bad":
				setBad((stateBad) => stateBad + 1);
				break;

			default:
				break;
		}
	};
	
	const countTotalFeedback = () => good + neutral + bad;

	const positivePercentage = () =>
		Math.round((good * 100) / countTotalFeedback());
	return (
		<Wrap>
			<Section title="Please leave feedback:">
				<FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={onLeaveFeedback} />
			</Section>

			{countTotalFeedback() ?  (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={countTotalFeedback()}
							positivePercentage={positivePercentage()}
						/>
					</Section>
				): <Notification message="No feedback given" />
	}
		</ Wrap>
	)
}
export default App;

