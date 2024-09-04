import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // for the custom matchers
import Home from '../Containers/Home'; // Adjust the import path if necessary

test('renders the Home component', () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  // Check if the main header is rendered
  expect(screen.getByText(/The 💥 you need for your react projects/i)).toBeInTheDocument();

  // Check if the "Get started" button is rendered
  expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
});
