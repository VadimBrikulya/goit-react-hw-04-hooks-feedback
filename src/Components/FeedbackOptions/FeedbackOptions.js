import PropTypes from "prop-types";
import { Button, Container, Item } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>{  
    return (
      <Container>
        {options.map((option, index) => (
          <Item key={index}>
            <Button
              
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </Item>
        
        ))}
      </Container>
    );
  }


FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;