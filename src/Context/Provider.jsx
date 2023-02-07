import { useState } from "react"
import Contexto from "./Contexto";

const valores=[{
    titulo:"Aprende algun lenguaje más rápido",
    item1: "Clases en linea",
    item2: "Buenos resultados",
    item3: "Tiempo completo para ti",
    item4: "Amplia tus conocimientos",
    item5: "Conoce nuestros profesores",
    texto:"Aprende un idioma en 2 semanas con nuestros profesores nativos, con horarios flexibles y cursos con dinamicas de lectura, escritura y hablado. Un profesor sólo para ti (12h/día). Presiona los botones para conocer a los profesores y su información:",
    boton1:"Profesor(a)",
    foto:"marta.PNG",
    nombre:"Marta Ríos",
    boton2:"Contacto",
    direccion:"48 St Laurent Boulevard, Montreal, Canadá",
    email: "marta_spanish@gmail.com",
    d: "Dirección",
    fb:"Marta Rios Marin",
    ig:"@marta_rm57"
},{
    titulo:"Learn any language faster",
    item1: "Online Classes",
    item2: "Good results",
    item3: "Full time for you",
    item4: "Expand your knowledge",
    item5: "Meet our teachers",
    texto:"Learn a language in 2 weeks with our native teachers, with flexible schedules and courses with reading, writing and speaking dynamics. A teacher just for you (12h/day). Press the buttons to meet the teachers and their information:",
    boton1:"Professor",
    nombre:"Grace Trembley",
    foto:"grace.PNG",
    boton2:"Contact",
    direccion:"65 Stonehaven, Ottawa, Canadá",
    email:"grace_english@gmail",
    d: "Address",
    fb:"Grace TT",
    ig:"@Grace-TT"
}  ,{
    titulo:"Lerne jede Sprache schneller",
    item1: "Online-Unterricht",
    item2: "gute Ergebnisse",
    item3: "Vollzeit für Sie",
    item4: "Erweitern Sie Ihr Wissen",
    item5: "Lernen Sie unsere Lehrer kennen",
    texto:"Lernen Sie eine Sprache in 2 Wochen mit unseren muttersprachlichen Lehrern, mit flexiblen Stundenplänen und Kursen mit Lese-, Schreib- und Sprechdynamik. Ein Lehrer nur für Sie (12h/Tag). Drücken Sie die Tasten, um die Lehrer und ihre Informationen zu treffen:",
    boton1:"Professor",
    nombre:"Moritz Zimmerman",
    foto:"deutch.jpg",
    boton2:"Kontakt",
    direccion:"2700 Rue Jean-Perrin #190, Québec, Canadá",
    email:"moritz_german@gmail.com",
    d: "die Anschrift",
    fb:"Moritz Zimmerman GG",
    ig:"@Mo_Zim"
}  ,{
    idioma:0
}]

const Provider = function({children}){
    const [ alumno, setAlumno ] = useState(valores);
    return(
        <Contexto.Provider value={{ alumno,setAlumno}}>
            {children}

        </Contexto.Provider>
    )
}

export default Provider;