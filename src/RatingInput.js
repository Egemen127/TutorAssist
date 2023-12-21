import React, { useState } from 'react';

const RatingInput = ({ course, onClose, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = () => {
        onSubmit(rating, review);
    };

    return (
        <div>
            {/* Rating Modal Content */}
            <h3>Rate {course.courseName}</h3>
            {/* Implement star rating system */}
            {/* Textarea for review */}
            <textarea value={review} onChange={(e) => setReview(e.target.value)}></textarea>

            {/* Submit Button */}
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default RatingInput;


