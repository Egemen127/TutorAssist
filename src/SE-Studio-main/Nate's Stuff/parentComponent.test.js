import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ParentComponent from './parentComponent';

test('renders the "My Application" title', () => {
  render(<ParentComponent />);
  const titleElement = screen.getByText('My Application');
  expect(titleElement).toBeInTheDocument();
});

test('displays SignUpScreen by default', () => {
  render(<ParentComponent />);
  const signUpForm = screen.getByText('Sign Up');
  expect(signUpForm).toBeInTheDocument();
});

test('shows ConfirmationScreen after successful sign-up', () => {
  render(<ParentComponent />);
  fireEvent.click(screen.getByText('Sign Up'));

  fireEvent.click(screen.getByText('Submit'));
  const confirmationTitle = screen.getByText('Account Created Successfully');
  expect(confirmationTitle).toBeInTheDocument();
});

test('navigates back to SignUpScreen from ConfirmationScreen', () => {
  render(<ParentComponent />);
  fireEvent.click(screen.getByText('Sign Up'));
  fireEvent.click(screen.getByText('Submit'));
  // After submission, it should show ConfirmationScreen
  const confirmationTitle = screen.getByText('Account Created Successfully');
  expect(confirmationTitle).toBeInTheDocument();

  fireEvent.click(screen.getByText('Back to Home'));
  // After clicking "Back to Home," it should return to SignUpScreen
  const signUpForm = screen.getByText('Sign Up');
  expect(signUpForm).toBeInTheDocument();
});

test('shows BecomeTutor screen when navigating to it', () => {
  render(<ParentComponent />);
  fireEvent.click(screen.getByText('Become a Tutor'));
  const becomeTutorTitle = screen.getByText('Become a Tutor');
  expect(becomeTutorTitle).toBeInTheDocument();
});
