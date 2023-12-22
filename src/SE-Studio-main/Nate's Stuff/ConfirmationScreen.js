import React from 'react';

function ConfirmationScreen({ onCancel }) {
  return (
    <div>
      <h1>Account Created Successfully</h1>
      <p>Your account has been created successfully.</p>
      <button onClick={onCancel}>Back to Home</button>
    </div>
  );
}

export default ConfirmationScreen;

