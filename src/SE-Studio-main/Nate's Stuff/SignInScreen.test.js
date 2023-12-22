import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignInScreen from './SignInScreen';

test('renders the "Sign In To Your Account" title', () => {
  render(<SignInScreen />);
  const titleElement = screen.getByText('Sign In To Your Account');
  expect(titleElement).toBeInTheDocument();
});

test('displays username and password fields', () => {
  render(<SignInScreen />);
  const usernameInput = screen.getByPlaceholderText('Enter your username');
  const passwordInput = screen.getByPlaceholderText('Enter your password');
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('shows "Forgot Password?" link', () => {
  render(<SignInScreen />);
  const forgotPasswordLink = screen.getByText('Forgot Password?');
  expect(forgotPasswordLink).toBeInTheDocument();
});

test('handles user sign-in correctly', () => {
  render(<SignInScreen />);
  const usernameInput = screen.getByPlaceholderText('Enter your username');
  const passwordInput = screen.getByPlaceholderText('Enter your password');
  const signInButton = screen.getByText('Sign In');

  // Simulate user input
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  // Trigger the sign-in button click
  fireEvent.click(signInButton);

}
);
