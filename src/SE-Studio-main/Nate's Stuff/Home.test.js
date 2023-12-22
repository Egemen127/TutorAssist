import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders the Tutor Assist logo', () => {
  render(<Home />);
  const logoElement = screen.getByAltText('TutorAssist.io Logo');
  expect(logoElement).toBeInTheDocument();
});

test('renders the "Become a Tutor" link', () => {
  render(<Home />);
  const becomeTutorLink = screen.getByText('Become a Tutor');
  expect(becomeTutorLink).toBeInTheDocument();
});

test('renders the "Login" link', () => {
  render(<Home />);
  const loginLink = screen.getByText('Login');
  expect(loginLink).toBeInTheDocument();
});

test('renders the "New User" link', () => {
  render(<Home />);
  const newUserLink = screen.getByText('New User');
  expect(newUserLink).toBeInTheDocument();
});

test('renders the "About Us" link', () => {
  render(<Home />);
  const aboutUsLink = screen.getByText('About Us');
  expect(aboutUsLink).toBeInTheDocument();
});

test('renders the large image', () => {
  render(<Home />);
  const largeImage = screen.getByAltText('Large Image');
  expect(largeImage).toBeInTheDocument();
});

test('renders the footer text', () => {
  render(<Home />);
  const footerText = screen.getByText(
    'TUTORS FROM PRESTIGIOUS UNIVERSITIES SUCH AS CORNELL, STANFORD, YALE, NYU, MIT AND MORE!'
  );
  expect(footerText).toBeInTheDocument();
});
