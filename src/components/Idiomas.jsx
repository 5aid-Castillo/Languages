import React, { useContext } from 'react';
import Contexto from '../Context/Contexto';
import spain from '../assets/es.png';
import gb from '../assets/gb.png';
import germany from '../assets/de.png'

const Idiomas = () => {
    const {setAlumno} = useContext(Contexto);
    const {alumno} = useContext(Contexto);
    const cambio1 = () =>{
        setAlumno(
            alumno.map((dato,indice)=>
            indice===3
            ? {...dato,idioma:0}
            : {...dato}
            )
        );
    }
    const cambio2 = () =>{
        setAlumno(
            alumno.map((dato,indice)=>
            indice===3
            ? {...dato,idioma:1}
            : {...dato}
            )
        );
    }
     const cambio3 = () =>{
        setAlumno(
            alumno.map((dato,indice)=>
            indice===3
            ? {...dato,idioma:2}
            : {...dato}
            )
        );
    } 
  return (
    <div className='idiomas'>
    <div className='bandera' onClick={cambio1}>
        <img src={spain} alt=""/>
    </div>
    <div className='bandera' onClick={cambio2}>
        <img src={gb} alt=""/>
    </div>
    <div className='bandera' onClick={cambio3}>
       <img src={germany} alt=""/>
   </div>
      

</div>
  )
}

export default Idiomas