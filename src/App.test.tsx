// Modules
import React from 'react';
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import App from './App';

// Helper
import { ThemeProviderWrapper } from "./utils/ThemeProviderWrapper";

test('renders App Successfully', () => {
  render(
  <ThemeProviderWrapper>
    <Router>
      <App />
    </Router>
  </ThemeProviderWrapper>
  );
  const linkElement = screen.getByText(/Github User Search and Repositories/i);
  expect(linkElement).toBeInTheDocument();
});
