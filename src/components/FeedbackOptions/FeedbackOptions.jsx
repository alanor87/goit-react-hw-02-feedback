import React from "react";
import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css"

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles['buttons-wrapper']}>
        {options.map((option) => (
          <button key={option} onClick={onLeaveFeedback} name={option}>
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string)
}

export default FeedbackOptions;
