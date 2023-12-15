import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; 

const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  const handleMouseOver = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStar = (index) => {
    const halfStar = (hoverRating === index + 0.5 || rating === index + 0.5);
    const fullStar = (hoverRating > index || rating > index);

    if (halfStar) {
      return (
        <span
          key={index}
          onMouseOver={() => handleMouseOver(index + 0.5)}
          onClick={() => handleClick(index + 0.5)}
        >
          <FaStarHalfAlt />
        </span>
      );
    }

    if (fullStar) {
      return (
        <span
          key={index}
          onMouseOver={() => handleMouseOver(index + 1)}
          onClick={() => handleClick(index + 1)}
        >
          <FaStar />
        </span>
      );
    }

    return (
      <span
        key={index}
        onMouseOver={() => handleMouseOver(index + 1)}
        onClick={() => handleClick(index + 1)}
      >
        <FaStar />
      </span>
    );
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(renderStar(i));
  }

  return (
    <div>
      {stars}
      <p>Your rating: {rating}</p>
    </div>
  );
};

export default StarRating;
