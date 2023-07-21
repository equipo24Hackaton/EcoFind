// Importa las dependencias necesarias para las pruebas
import React from 'react';
import { render, fireEvent, getByTestId, getByText } from '@testing-library/react';
import Header from './Header';
import { LikesProvider } from '../NotificationBadge/LikesContext';

// Mock del componente ModalComponent
jest.mock('../Modal/ModalComponent', () => () => null);

// Prueba del componente Header
test('renders logo image correctly', () => {
  // Simula un valor de likesCount y showNotification para la prueba
  const likesCount = 10;
  const showNotification = true;

  // Renderiza el componente Header con el LikesContext.Provider
  const { getByAltText, getByTestId } = render(
    <LikesProvider value={{ likesCount, showNotification }}>
      <Header />
    </LikesProvider>
  );

  // Verifica que la imagen del logo se muestre correctamente
  const logoImage = getByAltText('Logo');
  expect(logoImage).toBeInTheDocument();

  // Verifica que el icono de carrito de compras esté presente
  const cartIcon = getByTestId('cart-icon');
  expect(cartIcon).toBeInTheDocument();
});
