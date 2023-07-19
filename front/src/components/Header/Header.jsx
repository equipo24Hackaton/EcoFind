import React from 'react';
import logo from '../../assets/images/logo-icon.png';
import { IoPersonOutline, IoCartOutline } from 'react-icons/io5'; // Utiliza 'react-icons/io' en lugar de 'react-icons/io5'
import './Header.css'
import Search from '../Search/Search';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        {/* Aquí puedes colocar la imagen de tu logo */}
        <img src={logo} alt="Logo" />
      </div>
      <div className="user-login">
        {/* Aquí colocamos el botón de inicio de sesión con el ícono de usuario */}
        <button className="userLogin">
          <IoPersonOutline size={20} style={{ marginRight: '10px' }} />
          USER LOGIN
        </button>
      </div>
      <div className="icons">
        {/* Icono de carrito de compras */}
        <IoCartOutline className='icon' size={24} strokeWidth={2} stroke='black' />
        <div className='icono'>1</div>
        {/* Icono de lupa de buscador */}
        <Search/>
      </div>
    </div>
  );
};

export default Header;

