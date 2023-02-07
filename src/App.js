/* import Slider from './components/common/Slider'; */
import Idiomas from './components/Idiomas';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Pagina from './components/Pagina';
import Provider from './Context/Provider'; 



import './styles/Body.css';
function App() {
  return (
   
    <>
    <Header />
    <Provider>
    
      <div className="body-container"> 
      <div className='banderas'>
           <Idiomas />
      </div>
      <div className='contenido'> 
            <Pagina />
      </div>
      <Footer />
      </div>

      </Provider>
      
    </>
  );
}

export default App;
