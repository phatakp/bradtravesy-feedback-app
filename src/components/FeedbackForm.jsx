import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import Button from "./Button";
import Card from "./Card";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, { rating, text });
    } else {
      addFeedback({ rating, text });
    }
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect getSelectedValue={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={text.trim().length < 10}>
            Save
          </Button>
        </div>
        {text.trim().length > 0 && text.trim().length < 10 && (
          <div className="message">Please enter atleast 10 chars</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
