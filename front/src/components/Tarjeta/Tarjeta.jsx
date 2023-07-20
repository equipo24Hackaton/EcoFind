import { useState, useEffect } from 'react';
import './Tarjeta.css';
import { Link } from 'react-router-dom';
import { useLikesContext } from '../NotificationBadge/LikesContext';
import Corazon from '../NotificationBadge/Corazon';
import { fetchProducts } from '../../services/ApiConection';

const Tarjeta = ({ cardId, linkto }) => {
  const { likedCards, handleLike } = useLikesContext();
  const [liked, setLiked] = useState(likedCards[cardId] || false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts(searchQuery); // Pasamos el término de búsqueda a la función
        setProducts(productsData);
      } catch (error) {
        console.error(error.message);
      }
    };

    // Llamar a la función para obtener los productos cuando searchQuery cambie
    getProducts();
  }, [searchQuery]);

  const handleLikeClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    handleLike(cardId, newLiked);
  };

  return (
    <section>
      {/* Input de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQuery}
          placeholder="Buscar productos..."
          className="search-input"
        />
       
      </div>

      <div className='grid-container'>
        {/* Utilizar map para mostrar todos los productos */}
        {products.map(product => (
          <div className='containerTarjeta' key={product.id}>
            <img className='imgTarjeta' src={product.image_url} alt='Imagentarjeta' />
            <div className='botonesTarjeta'>
              <button className='prodName'>{product.name}</button>
              <div className='botonesTarjeta2'>
                <button className='price'>{product.price}</button>
                <Corazon isLiked={liked} onClick={handleLikeClick} />
              </div>
            </div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={linkto}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tarjeta;
