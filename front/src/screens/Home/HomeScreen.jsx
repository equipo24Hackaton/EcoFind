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
        
      </div>

      

      

      <Footer />
    </>
  );
};

export default HomeScreen;
