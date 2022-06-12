import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function RatingSelect({ getSelectedValue }) {
  const [ratingSelected, setRatingSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setRatingSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (val) => {
    setRatingSelected(val);
    getSelectedValue(val);
  };

  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
        <li key={val}>
          <input
            type="radio"
            id={`num${val}`}
            name="rating"
            onChange={() => handleChange(+val)}
            checked={ratingSelected === val}
          />
          <label htmlFor={`num${val}`}>{val}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
