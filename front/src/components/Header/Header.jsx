import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline, IoHeartOutline, IoHeart } from 'react-icons/io5';
import './Header.css';
import NotificationBadge from '../NotificationBadge/NotificationBadge';
import { useLikesContext } from '../NotificationBadge/LikesContext';
import ModalComponent from '../Modal/ModalComponent';
import logo from '../../assets/images/logo-icon.png';


import Search from '../Search/Search';

const Header = () => {
  const { likesCount, likedCards, handleLike, showNotification } =
    useLikesContext();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='header'>
      <div className='logo'>
        {/* Aquí puedes colocar la imagen de tu logo */}
        <img src={logo} alt="Logo" />
      </div>
      <div className='user-login'>
        {/* Aquí colocamos el botón de inicio de sesión con el ícono de usuario */}
      </div>
      <div className='icons'>
        <NotificationBadge onClick={handleOpenModal} count={likesCount}  showBadge={showNotification} />

        <ModalComponent isOpen={modalIsOpen} onClose={handleCloseModal} />
    
        {/* Icono de carrito de compras */}
        <IoCartOutline className='icon' size={30} />
        {/* Icono de lupa de buscador */}
        
        <Search/>
      </div>
    </div>
  );
};

export default Header;
