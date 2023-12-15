import React, { useState } from 'react';
import StarRating from './StarRating';

const RatingModal = ({ onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit({ rating, comment });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Rate Course/Professor</h2>
        <StarRating onChange={handleRatingChange} />
        <textarea
          placeholder="Leave your feedback here..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default RatingModal;

