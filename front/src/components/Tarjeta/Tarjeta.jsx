import React, { useState } from 'react';
import './Tarjeta.css';
import Aceiterosa from '../../assets/images/aceiterosa.jpg';
import { Link } from 'react-router-dom';
import { useLikesContext } from '../NotificationBadge/LikesContext';
import Corazon from '../NotificationBadge/Corazon';

const Tarjeta = ({ cardId, linkto, imgCard, price, productName }) => {
  const { likedCards, handleLike } = useLikesContext();
  const [liked, setLiked] = useState(likedCards[cardId] || false);

  const handleLikeClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    handleLike(cardId, newLiked);
  };

  return (
    <div className='containerTarjeta'>
      <img className='imgTarjeta' src={imgCard} alt='Imagentarjeta' />
      <div className='botonesTarjeta'>
        <button className='prodName'>{productName}</button>
        <div className='botonesTarjeta2'>
          <button className='price'>{price}</button>
          <Corazon isLiked={liked} onClick={handleLikeClick} />
        </div>
      </div>
      <Link style={{textDecoration: 'none', color: 'white'}} to={linkto}>Ver Detalles</Link>
    </div>
  );
};

export default Tarjeta;
