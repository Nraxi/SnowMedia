import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importera BrowserRouter
import App from './App';

// Mocka useLocation för att simulera ett objekt med pathname
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ pathname: '/mocked-path' }),
}));

test('renders App without crashing', () => {
  render(
    <Router>
      <App />
    </Router>
  );
});