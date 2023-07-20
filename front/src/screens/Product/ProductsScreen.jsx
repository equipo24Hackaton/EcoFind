import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { fetchProducts } from '../../services/ApiConection';

import '../Product/ProductScreen.css';

export default function ProductsScreen() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Function to fetch products from the API
    const fetchData = async () => {
      try {
        const data = await fetchProducts('');
        // Assuming the API returns an array of products, you can set the first product here
        if (data && data.length > 0) {
          setProduct(data[0]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  // If the product data is still being fetched, you can display a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div>
          <div className='imagenProducto'>
            <img className='imgProducto' src={product.image_url} alt='imagenProducto'></img>
          </div>

          <div className='description'>
            <div>
              {/* NOMBRE */}
              <h1 style={{ textAlign: 'left' }}>{product.name}</h1>
              <h2 style={{ textAlign: 'left' }}>{product.price}</h2>
              <button className='btnCompra'>Comprar</button>
              <div className='textDescription'>
                <h3 style={{ maxWidth: '250px' }}>{product.description}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

