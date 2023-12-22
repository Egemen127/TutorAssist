import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignUpScreen from './SignUpScreen';

test('renders the "Sign Up" title', () => {
  render(<SignUpScreen />);
  const titleElement = screen.getByText('Sign Up');
  expect(titleElement).toBeInTheDocument();
});

test('displays input fields and labels', () => {
  render(<SignUpScreen />);
  const firstNameInput = screen.getByPlaceholderText('Enter your first name');
  const lastNameInput = screen.getByPlaceholderText('Enter your last name');
  const emailInput = screen.getByPlaceholderText('Enter your email address');
  const usernameInput = screen.getByPlaceholderText('Enter your username');
  const passwordInput = screen.getByPlaceholderText('Enter your password');
  const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password');
  const birthdayMonthSelect = screen.getByRole('combobox', { name: 'Birthday' });
  const genderSelect = screen.getByRole('combobox', { name: 'Gender' });
  const securityQuestion1Select = screen.getByRole('combobox', { name: 'Security Question 1' });
  const securityAnswer1Input = screen.getByPlaceholderText('Enter your answer');
  const securityQuestion2Select = screen.getByRole('combobox', { name: 'Security Question 2' });
  const securityAnswer2Input = screen.getByPlaceholderText('Enter your answer');

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(birthdayMonthSelect).toBeInTheDocument();
  expect(genderSelect).toBeInTheDocument();
  expect(securityQuestion1Select).toBeInTheDocument();
  expect(securityAnswer1Input).toBeInTheDocument();
  expect(securityQuestion2Select).toBeInTheDocument();
  expect(securityAnswer2Input).toBeInTheDocument();
});

test('handles sign-up correctly', () => {
  render(<SignUpScreen />);
  const handleSignUp = jest.fn();

  // Simulate user input
  const firstNameInput = screen.getByPlaceholderText('Enter your first name');
  const lastNameInput = screen.getByPlaceholderText('Enter your last name');
  const emailInput = screen.getByPlaceholderText('Enter your email address');
  const usernameInput = screen.getByPlaceholderText('Enter your username');
  const passwordInput = screen.getByPlaceholderText('Enter your password');
  const confirmPasswordInput = screen.getByPlaceholderText('Confirm your password');

  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
  fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
  fireEvent.change(usernameInput, { target: { value: 'johndoe123' } });
  fireEvent.change(passwordInput, { target: { value: 'securePassword' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'securePassword' } });

  // Trigger the sign-up button click
  fireEvent.click(screen.getByText('Submit'));
}
);
