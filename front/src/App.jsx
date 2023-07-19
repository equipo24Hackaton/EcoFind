import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Tarjeta from './components/Tarjeta/Tarjeta'
import Footer from './components/Footer/Footer'



// FUENTES



function App() {
  

  return (
    <>
      
      <Header/>
      <Banner/>

      <h2 style={{textAlign:'center'}}>CATEGORIAS</h2>


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
