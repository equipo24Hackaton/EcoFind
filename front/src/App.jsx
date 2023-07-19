

import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner'
import Categoria from './components/Categoria'
import Tarjeta from './Tarjeta/Tarjeta'



// FUENTES



function App() {
  

  return (
    <>
      
      <Header/>
      <Banner/>

      <div className='tarjetas'>
      <Tarjeta/>
      <Tarjeta/>
      </div>

      <div className='tarjetas'>
      <Tarjeta/>
      <Tarjeta/>
      </div>

      <div className='tarjetas'>
      <Tarjeta/>
      <Tarjeta/>
      </div>

      <div className='tarjetas'>
      <Tarjeta/>
      <Tarjeta/>
      </div>













     
    </>
  )
}

export default App
