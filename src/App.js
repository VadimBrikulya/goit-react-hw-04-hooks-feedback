
import React, { Component } from "react";

import Statistics from "./Components/Statictics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Notification from "./Components/Notification/Notification";

import "./index.css";
import "./App.css";
import Wrap from "App.styled";

 class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };


      countTotalFeedback = () => {
          const { good, neutral, bad } = this.state;
          return good + neutral + bad;
        };

        countPositiveFeedbackPercentage = () => {
            const result = this.countTotalFeedback();
            const { good } = this.state;
            const percentage = (good * 100) / result;
            return Math.round(percentage);
        };
   onLeaveFeedback = (e) => {
     const name = e.target.name;
     this.setState((prevState) => ({
       [name]: prevState[name] + 1
     }));
   };


render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		const objKey = Object.keys(this.state);
		return (
			<Wrap>
				<Section title="Please leave feedback:">
					<FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
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
}

export default App;

