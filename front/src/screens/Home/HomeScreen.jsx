import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Tarjeta from '../../components/Tarjeta/Tarjeta';
import Banner from '../../components/Banner/Banner'; // Agrega la importación de Banner si es necesario

// IMAGENES
import img1 from '../../assets/images/Aceiterosa.jpg'
import img2 from '../../assets/images/aceites.jpg'
import img3 from '../../assets/images/cremaaguacate.jpg'
import img4 from '../../assets/images/kitbano.jpg'
import img5 from '../../assets/images/aceites.jpg'
import img6 from '../../assets/images/cepilloseco.jpg'
import img7 from '../../assets/images/velaartesanal.jpg'



const HomeScreen = ({ handleLike,  }) => {
  return (
    <>
      <Header />
      <Banner />

      {/* Agrupa las instancias de Tarjeta en una sola sección */}
      <div className='tarjetas'>
        {/* Pasa las propiedades de handleLike y linkto correctamente */}
        <Tarjeta linkto="/products/producto-1" handleLike={handleLike} 
        
        imgCard={img1}
        price={6.10 + ' €'}
        productName={'Aceite Rosa'}
        
        />
        <Tarjeta handleLike={handleLike}
        imgCard={img2}
        price={10.20 + ' €'}
        productName={'Pack de Esencias'} />
      </div>

      <div className='tarjetas'>
        <Tarjeta handleLike={handleLike}
        imgCard={img3}
        price={8.20 + ' €'}
        productName={'Crema Hidratante Aguacate'} />
        <Tarjeta handleLike={handleLike}
        imgCard={img4}
        price={17.50 + ' €'}
        productName={'Kit de Baño'} />
      </div>

      <div className='tarjetas'>
        <Tarjeta handleLike={handleLike} 
        imgCard={img5}
        price={5.20 + ' €'}
        productName={'Cepillos Ecológicos X 3'} />
        <Tarjeta handleLike={handleLike}
        imgCard={img6}
        price={7.90 + ' €'}
        productName={'Velas Artesanales X 3'} />
      </div>

      

      <Footer />
    </>
  );
};

export default HomeScreen;
