import React from "react";
import '../css/Header.css';
import { RiAliensFill } from 'react-icons/ri';

export function Header() {
    const logoName = '< Bruno Magaro />'
    return (
        <header className='header' id="inicio">
            <div className='marquee'>
                <RiAliensFill className="marquee__icon" />
                <p>Bienvenid@ a mi portfolio, gracias por tu visita!</p>
            </div>
            <div className='header-data-cont'>
                <h1 className='name'>{logoName}</h1>
                <h1 className='front-end'>Front-End Dev</h1>
            </div>
        </header>
    )
}