import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import './RatingInput.css'; 

function RatingInput({ courseId, onRatingChange }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0); // State to hold selected rating

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitRating = () => {
    onRatingChange(courseId, selectedRating);
    setShowModal(false);
    // Optionally, perform backend update (API request) to store the new rating - Utility.SubmitCourseRating(courseId, selectedRating);
  };

  return (
    <div>
      {/* Button to trigger the rating input */}
      <Button onClick={() => setShowModal(true)}>Rate Course</Button>

      {/* Modal for rating input */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
          <h2>Rate this course</h2>
          <div>
            <button onClick={() => handleRatingChange(1)}>1 star</button>
            <button onClick={() => handleRatingChange(2)}>2 stars</button>
            <button onClick={() => handleRatingChange(3)}>3 stars</button>
            <button onClick={() => handleRatingChange(4)}>4 stars</button>
            <button onClick={() => handleRatingChange(5)}>5 stars</button>
          </div>
          <Button onClick={handleSubmitRating}>Submit Rating</Button>
        </div>
      </Modal>
    </div>
  );
}

export default RatingInput;

