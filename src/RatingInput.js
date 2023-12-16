import React, { useState } from 'react';
import StarRating from './StarRating';
import { DialogContent, DialogTitle,DialogActions } from '@mui/material';

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
        <span className="close" style={{"cursor":"pointer"}}onClick={onClose}>&times;</span>
        <DialogTitle><h2>Rate Course/Professor</h2></DialogTitle>
        <DialogContent>
          <StarRating onChange={handleRatingChange} />
        <textarea
          placeholder="Leave your feedback here..."
          value={comment}
          onChange={handleCommentChange}
        />
        </DialogContent>
        <DialogActions>
        <button onClick={handleSubmit}>Submit</button>
        </DialogActions>
      </div>
    </div>
  );
};

export default RatingModal;

