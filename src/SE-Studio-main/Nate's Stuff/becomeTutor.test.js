import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()

import BecomeTutor from './becomeTutor';

// Create a mock function for the 'setPage' prop
const mockSetPage = jest.fn();

test('renders the Become a Tutor form', () => {
  const { getByText, getByPlaceholderText, getByLabelText, getBySelectText } = render(
    <BecomeTutor setPage={mockSetPage} />
  );

  // Use the testing library queries to find elements and make assertions
  expect(getByText('Become a Tutor')).toBeInTheDocument();

  // Replace these with actual test data from form fields
  const firstNameInput = getByPlaceholderText('First Name');
  const tutorLevelsSelect = getBySelectText('Select Tutor Levels');
  const subjectsInterestedTextarea = getByPlaceholderText('List all subjects');
  const languagesToTutorTextarea = getByPlaceholderText('List all languages');
  const securityQuestion1Select = getByLabelText('Security Question 1:');
  const securityQuestion2Select = getByLabelText('Security Question 2:');
  const answerToQuestion1Input = getByPlaceholderText('Answer to Question 1');
  const answerToQuestion2Input = getByPlaceholderText('Answer to Question 2');
  const submitButton = getByText('Submit');

  // Perform interactions and assertions as needed
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(answerToQuestion1Input, { target: { value: 'Answer 1' } });
  fireEvent.change(answerToQuestion2Input, { target: { value: 'Answer 2' } });
  fireEvent.click(submitButton);

});

test('handles form submission correctly', () => {
  const { getByText } = render(<BecomeTutor setPage={mockSetPage} />);
  const submitButton = getByText('Submit');
  fireEvent.click(submitButton);
  expect(mockSetPage).toHaveBeenCalledWith('confirmation');
});
