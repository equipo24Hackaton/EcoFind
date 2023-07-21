import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importar para utilizar los matchers de jest-dom
import Footer from '../Footer';

test('renders Footer component correctly', () => {
  render(<Footer />);

  const logoImage = screen.getByAltText('Logo');
  expect(logoImage).toBeInTheDocument();

  const messageElement = screen.getByText('INSPÍRATE CON LO ARTESANAL');
  expect(messageElement).toBeInTheDocument();
});
