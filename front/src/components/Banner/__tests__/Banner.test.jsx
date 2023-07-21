import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importa esta línea para tener acceso a los matchers de Jest DOM
import Banner from '../Banner'; // Asegúrate de que la ruta sea correcta

test('renders banner text correctly', () => {
  const { getByText } = render(<Banner />);
  const bannerText = getByText('TU TIENDA ECOLÓGICA');
  expect(bannerText).toBeInTheDocument();
});
