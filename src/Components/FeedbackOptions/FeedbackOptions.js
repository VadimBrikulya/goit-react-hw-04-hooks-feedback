import { Component } from "react";
import PropTypes from "prop-types";
import { Button, Container, Item } from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  render() {
    return (
      <Container>
        {this.props.options.map((option) => {
          return (
            <Item key={option}>
              <Button
                type="button"
                name={option}
                onClick={this.props.onLeaveFeedback}
              >
                {option}
              </Button>
            </Item>
          );
        })}
      </Container>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;