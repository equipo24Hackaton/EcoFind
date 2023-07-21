import { Modal } from 'react-modal';


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalComponent from './ModalComponent';

// Resto de las pruebas...


// Mock del hook useLikesContext para poder simular los datos del contexto
jest.mock('../NotificationBadge/LikesContext', () => ({
  useLikesContext: () => ({
    likedCards: {
      1: {
        name: 'Product 1',
        image: 'product1.jpg',
        price: '$10',
      },
      2: {
        name: 'Product 2',
        image: 'product2.jpg',
        price: '$20',
      },
    },
  }),
}));



test('renders modal content correctly', () => {
  // Renderiza el componente ModalComponent con el modal abierto
  const { getByText, getByAltText } = render(<ModalComponent isOpen={true} />);

  // Verifica que el contenido dentro del modal se renderice correctamente
  const modalTitle = getByText('Favoritos');
  expect(modalTitle).toBeInTheDocument();

  // Verifica que los productos dentro del modal se rendericen correctamente
  const product1Name = getByText('Product 1');
  expect(product1Name).toBeInTheDocument();
  const product1Image = getByAltText('Product 1');
  expect(product1Image).toBeInTheDocument();

  const product2Name = getByText('Product 2');
  expect(product2Name).toBeInTheDocument();
  const product2Image = getByAltText('Product 2');
  expect(product2Image).toBeInTheDocument();
});
