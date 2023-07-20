import React from 'react'
import Header from '../../components/Header/Header';

import '../Product/ProductScreen.css'

export default function ProductsScreen() {
  return (
    <>
    <Header/>
    <div className='container'>


    <div>
    <div className='imagenProducto'>
      <img className='imgProducto' src="https://previews.123rf.com/images/vladvm/vladvm1511/vladvm151100280/47689894-el-%C3%ADcono-de-producto-org%C3%A1nico-eco-y-bio-s%C3%ADmbolo-de-ecolog%C3%ADa-ilustraci%C3%B3n-de-vector-plano.jpg" alt='imagenProducto'></img>
    </div>


    <div className='description'>
      <div>
        {/* NOMBRE */}

    <h1 style={{textAlign: 'left'}}>Product Name</h1>
    <h2 style={{textAlign:'left'}}>Price</h2>
    <button className='btnCompra'>Comprar</button>
    <div className='carrousel'>
      <div className='raya'/>
      <div className='raya'/>
      <div className='raya'/>
    </div>
    <div className='textDescription'>
      <h3 style={{maxWidth:'250px'}}>Lorem ipsum lala lala vamos a ganar, lo lo lo somos lo mejor!</h3>
    </div>
      </div>
    </div>

    </div>

      </div>
    
    
    
    
    
    
    
    
    </>
  )
}
