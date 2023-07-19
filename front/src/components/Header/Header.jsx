import React from 'react';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { IoPersonOutline, IoCartOutline } from 'react-icons/io5'; // Utiliza 'react-icons/io' en lugar de 'react-icons/io5'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* Aquí puedes colocar la imagen de tu logo */}
        <img src="ruta-del-logo.png" alt="Logo" />
      </div>
      <div className="user-login">
        {/* Aquí colocamos el botón de inicio de sesión con el ícono de usuario */}
        <button className="userLogin">
          <IoPersonOutline size={20} style={{ marginRight: '10px' }} />
          USER LOGIN
        </button>
      </div>
      <div className="icons">
      <div className='notification'>1</div>
        <IoNotificationsOutline className='icon' size={24} />
        {/* Icono de carrito de compras */}
        <IoCartOutline className='icon' size={24} strokeWidth={2} stroke='black' />
        {/* Icono de lupa de buscador */}
        <FaSearch className='icon' size={24} />
      </div>
    </div>
  );
};

export default Header;

