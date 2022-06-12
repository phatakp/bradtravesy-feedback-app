import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure to delete")) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (feedback) => {
    feedback.id = uuidv4();
    setFeedbacks([feedback, ...feedbacks]);
  };

  const updateFeedback = (id, updFeedback) => {
    setFeedbacks(
      feedbacks.map((item) =>
        item.id === id ? { ...item, ...updFeedback } : item
      )
    );
  };

  const editFeedback = (feedback) => {
    setFeedbackEdit({ item: feedback, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
