import React, { useState,useContext } from 'react';
import Profesora from './Profesora';
import Ubicacion from './Ubicacion';
import Contexto from '../Context/Contexto'
import '../styles/Body.css';
import Slider from './common/Slider';
/* import Carousel from "react-elastic-carousel";
import Item from './Item'; */
/* import '../styles/Text.sass'; */

const Pagina = () => {
    const {alumno} = useContext(Contexto);
    const idioma = alumno[3].idioma;
    const[ocultar1, setOcultar1] = useState(false);
    const[ocultar2, setOcultar2] = useState(false);
    const mostrar1 = () =>{
        setOcultar1(!ocultar1);
        setOcultar2(false);
    }
    const mostrar2 = () =>{
        setOcultar2(!ocultar2);
        setOcultar1(false);
    }
   /*  const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ]; */
  return (
     <>
        
        <div>
       {/*  <Carousel breakPoints={breakPoints}>
          <Item className="item-one">{alumno[idioma].item1}</Item>
          <Item className="item-two">{alumno[idioma].item2}</Item>
          <Item className="item-three">{alumno[idioma].item3}</Item>
          <Item className="item-four">{alumno[idioma].item4}</Item>
          <Item className="item-five">{alumno[idioma].item5}</Item>
          
          
        </Carousel> */}
        
        <Slider />

        <div className="title">
        <h1 className='fancy'>{alumno[idioma].titulo}</h1>
        </div>
        <h2 className="text">{alumno[idioma].texto}</h2>
        <div className='botones'>
            <button className="info-button" onClick={mostrar1}>{alumno[idioma].boton1}</button>
            <button className="info-button" onClick={mostrar2}>{alumno[idioma].boton2}</button>
        </div>
        {ocultar1 
                ?<Profesora />
                : null
        }
        {ocultar2 
                ?<Ubicacion />
                : null
        }
        
        </div>
        <br/><br/><br/>
     </>
  )
}

export default Pagina