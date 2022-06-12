import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  let average =
    feedbacks.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedbacks.length;

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1)} </h4>
    </div>
  );
}

export default FeedbackStats;
