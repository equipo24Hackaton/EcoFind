

import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner'
import Categoria from './components/Categoria'
import Tarjeta from './components/Tarjeta'
import Footer from './components/Footer/Footer'



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

      <Footer/>












     
    </>
  )
}

export default App
