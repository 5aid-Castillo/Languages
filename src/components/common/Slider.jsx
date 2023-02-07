import Carousel from 'react-bootstrap/Carousel';
import itemOne from '../../assets/online-clases.jpg';
import itemTwo from '../../assets/beneficios.jpg';
import itemThree from '../../assets/bored.jpg';
import itemFour from '../../assets/speak.jpg';
import itemFive from '../../assets/teachers.jpg';
import Contexto from '../../Context/Contexto'
import '../../styles/Body.css';
import React,{useContext} from 'react';
function Slider() {
  const {alumno} = useContext(Contexto);
    const idioma = alumno[3].idioma;
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100" 
          src={itemOne}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>{alumno[idioma].item1}</h3>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src={itemTwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{alumno[idioma].item2}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-700 "
          src={itemThree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{alumno[idioma].item4}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-700 item-two"
          src={itemFour}
          alt="Four slide"
        />
        <Carousel.Caption>
          <h3 >{alumno[idioma].item4}</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-700"
          src={itemFive}
          alt="Five slide"
        />

        <Carousel.Caption>
          <h3>{alumno[idioma].item5}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;