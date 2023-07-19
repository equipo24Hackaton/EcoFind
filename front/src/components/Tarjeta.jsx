import React from 'react'

import { IoPersonOutline, IoCartOutline,IoHeartOutline} from 'react-icons/io5';

const Tarjeta = () => {
  return (
    <div className='containerTarjeta'>
        <img className='imgTarjeta' src='https://via.placeholder.com/150?text=Imagen+de+prueba' alt='Imagentarjeta'/>
        <div className='botonesTarjeta'>
            <button className='prodName'>PRODUCT NAME</button>
            <div className='botonesTarjeta2'>
            <button className='price'>PRICE</button>
            <IoHeartOutline size={30}/>
            </div>
        </div>
    </div> 
  )
}


export default Tarjeta;