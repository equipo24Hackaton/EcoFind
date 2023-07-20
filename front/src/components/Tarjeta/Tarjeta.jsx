import React, { useState, useEffect } from 'react';
import './Tarjeta.css';
import { Link } from 'react-router-dom';
import { useLikesContext } from '../NotificationBadge/LikesContext';
import Corazon from '../NotificationBadge/Corazon';
import { fetchProducts } from '../../services/ApiConection';

const Tarjeta = ({ handleLike, linkto }) => {
  const { likedCards } = useLikesContext();
  const [liked, setLiked] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts(searchQuery);
        setProducts(productsData);
      } catch (error) {
        console.error(error.message);
      }
    };

    getProducts();
  }, [searchQuery]);

  const handleLikeClick = (productName) => {
    const newLiked = !likedCards[productName];
    setLiked(newLiked);
    handleLike(productName, newLiked);
  };

  return (
    <section>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQuery}
          placeholder="Buscar productos..."
          className="search-input"
        />
      </div>

      <div className='flex-container'>
        {products.map(product => (
          <div className='containerTarjeta' key={product.id}>
            <img className='imgTarjeta' src={product.image_url} alt='Imagentarjeta' />
            <div className='botonesTarjeta'>
              <button className='prodName'>{product.name}</button>
              <div className='botonesTarjeta2'>
                <button className='price'>{product.price}</button>
                <Corazon isLiked={likedCards[product.name]} onClick={() => handleLikeClick(product.name)} />
              </div>
            </div>
            <Link to={linkto} style={{ textDecoration: 'none', color: 'white' }}>
              Ver Detalles
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tarjeta;


