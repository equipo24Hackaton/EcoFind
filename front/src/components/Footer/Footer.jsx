import React from 'react';
import logo from '../../assets/images/logo-icon.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='line'></div>
      <img src={logo} alt="Logo" />
      <p>INSPÍRATE CON LO ARTESANAL</p>
    </div>
  );
}

export default Footer;
