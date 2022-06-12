import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { feedbacks } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks &&
          feedbacks.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} />
            </motion.div>
          ))}
        {!feedbacks && <div>No feedbacks yet</div>}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
