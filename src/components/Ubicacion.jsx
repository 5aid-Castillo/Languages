import React,{useContext} from 'react'
import Contexto from '../Context/Contexto'
import ubicacion from '../assets/marcador (1).png';
import ig from '../assets/marcador (2).png';
import fb from '../assets/marcador (3).png';
import email from '../assets/marcador (4).png';
const Ubicacion = () => {
  const {alumno} = useContext(Contexto);
  const idioma = alumno[3].idioma;

  return (
    <div className='ubicacion'>
        <h2>{alumno[idioma].boton2}</h2>
        <div className='texto'>
           <div><img className="icon" src={email} alt="email"/> email: {alumno[idioma].email} </div>
          <div><img className="icon" src={fb} alt="email"/> Facebook: {alumno[idioma].fb} </div>
           <div><img className="icon" src={ig} alt="email"/> Instagram: {alumno[idioma].ig}</div> 
          <div><img className="icon" src={ubicacion} alt="email"/>{alumno[idioma].d} : {alumno[idioma].direccion} </div>
        
        </div>
    </div>
  )
}

export default Ubicacion