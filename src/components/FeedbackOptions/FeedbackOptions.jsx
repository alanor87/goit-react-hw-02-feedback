import React from "react";
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

export default FeedbackOptions;
