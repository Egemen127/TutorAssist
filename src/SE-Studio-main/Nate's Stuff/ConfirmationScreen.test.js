import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ConfirmationScreen from './ConfirmationScreen';

test('renders the confirmation screen with the appropriate text', () => {
  const { getByText } = render(<ConfirmationScreen onCancel={() => {}} />);

  expect(getByText('Account Created Successfully')).toBeInTheDocument();
  expect(getByText('Your account has been created successfully.')).toBeInTheDocument();
  expect(getByText('Back to Home')).toBeInTheDocument();
});

test('calls the onCancel function when the "Back to Home" button is clicked', () => {
  const onCancelMock = jest.fn();
  const { getByText } = render(<ConfirmationScreen onCancel={onCancelMock} />);
  const backButton = getByText('Back to Home');

  fireEvent.click(backButton);

  expect(onCancelMock).toHaveBeenCalledTimes(1);
});
