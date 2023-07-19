import React from 'react'
import Aceiterosa from '../assets/aceiterosa.jpg'
import { IoPersonOutline, IoCartOutline,IoHeartOutline} from 'react-icons/io5';
import './Tarjeta.css'
const Tarjeta = () => {
  return (
    <div className='containerTarjeta'>
        <img src={Aceiterosa} alt='imagen aceite de rosa'/>
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