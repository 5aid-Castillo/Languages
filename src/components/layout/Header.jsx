import React from 'react'
import '../../styles/Header.css';
import world from '../../assets/alumno.png'
const Header = () => {
  return (
    <>
        <header className="header">
            <div className="logo">
                <a href="index.html">
                    <img src={world} alt="world"/>
                    TalkingTogether
                </a>
            </div>
        </header>
    
    </>
  )
}

export default Header