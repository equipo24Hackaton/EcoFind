import React, { createContext, useState, useContext } from 'react';

const LikesContext = createContext();

export const useLikesContext = () => useContext(LikesContext);

export const LikesProvider = ({ children }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [likedCards, setLikedCards] = useState({});

  const handleLike = (cardId, isLiked) => {
    setLikedCards((prevLikedCards) => ({
      ...prevLikedCards,
      [cardId]: isLiked,
    }));

    if (isLiked) {
      setLikesCount((prevLikesCount) => prevLikesCount + 1);
      setShowNotification(true);
    } else {
      setLikesCount((prevLikesCount) => prevLikesCount - 1);
      // Check if there are any liked cards left
      setShowNotification(Object.values(likedCards).some((liked) => liked));
    }
  };

  return (
    <LikesContext.Provider
      value={{ likesCount, handleLike, showNotification, likedCards }}
    >
      {children}
    </LikesContext.Provider>
  );
};
