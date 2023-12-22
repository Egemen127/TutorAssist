import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

test('renders About Us component', () => {
  render(<AboutUs />);
  const aboutUsElement = screen.getByText('About Us'); // Check if "About Us" heading is present
  const paragraphElement = screen.getByText(/Unlike many existing tutoring applications/i); // Check if a specific paragraph is present
  expect(aboutUsElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

test('renders application name', () => {
  render(<AboutUs />);
  const appNameElement = screen.getByText('Tutor Assist'); // Check if the application name is present
  expect(appNameElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<AboutUs />);
  const links = screen.getAllByRole('link'); // Get all links in the component
  expect(links).toHaveLength(4); // Check if there are four links
  const linkTexts = links.map((link) => link.textContent); // Extract link text
  expect(linkTexts).toEqual(['Become a Tutor', 'Login', 'New User', 'About Us']); // Check if link texts match
});

test('renders application logo', () => {
  render(<AboutUs />);
  const logoElement = screen.getByAltText('TutorAssist.io Logo'); // Check if the logo is present with the alt text
  expect(logoElement).toBeInTheDocument();
});

test('renders heading and paragraph', () => {
  render(<AboutUs />);
  const headingElement = screen.getByText('About Us'); // Check if the "About Us" heading is present
  const paragraphElement = screen.getByText(/Unlike many existing tutoring applications/i); // Check if a specific paragraph is present
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
