import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Tarjeta from '../../components/Tarjeta/Tarjeta';
import Banner from '../../components/Banner/Banner'; 

const HomeScreen = ({ handleLike,  }) => {
  return (
    <>
      <Header />
      <Banner />

      <div className='tarjetas'>

        <Tarjeta linkto="/products/producto-1" handleLike={handleLike}/>
        
      </div>

      

      

      <Footer />
    </>
  );
};

export default HomeScreen;
