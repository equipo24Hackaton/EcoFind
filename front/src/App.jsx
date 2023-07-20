import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/Home/HomeScreen';
import ProductsScreen from './screens/Product/ProductsScreen';
import { LikesProvider } from './components/NotificationBadge/LikesContext';
import Modal from 'react-modal'; // Importa react-modal aquí

function App() {
  // Asocia el elemento del DOM #root con react-modal
  Modal.setAppElement('#root');

  return (
    <BrowserRouter>
      <LikesProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products/*" element={<ProductsScreen />} />
        </Routes>
      </LikesProvider>
    </BrowserRouter>
  );
}

export default App;
