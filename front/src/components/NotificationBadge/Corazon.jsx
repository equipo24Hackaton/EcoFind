import React from 'react';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

const Corazon = ({ isLiked, onClick }) => {
  return (
    <>
      {isLiked ? (
        <IoHeart size={30} onClick={onClick} color='red' />
      ) : (
        <IoHeartOutline size={30} onClick={onClick} color='white' />
      )}
    </>
  );
};

export default Corazon;
