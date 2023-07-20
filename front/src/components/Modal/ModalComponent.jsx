import React from "react";
import Modal from "react-modal";
import { useLikesContext } from '../NotificationBadge/LikesContext';

const ModalComponent = ({ isOpen, onClose }) => {
  const { likedCards } = useLikesContext();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Favoritos Modal"
    >
      {/* Contenido del modal */}
      <h2>Favoritos</h2>
      <button onClick={onClose}>Cerrar modal</button>

      <ul>
        {Object.entries(likedCards).map(([productId, productData]) => (
          <li key={productId}>
            <img src={productData.image} alt={productData.name} />
            <div>
              <h3>{productData.name}</h3>
              <p>Precio: {productData.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalComponent;
