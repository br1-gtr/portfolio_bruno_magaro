import React from "react";
import { TituloSeccion } from "./TituloSeccion.jsx";
import { RiUser5Fill } from 'react-icons/ri';
import '../css/SobreMi.css';
import { FaGuitar } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';
import { SiApplemusic } from 'react-icons/si';
import { MdLocalMovies } from 'react-icons/md';
export function SobreMi() {
    return (
        <div className='card'>
            <div className='card__data'>
                <div>
                    <div className='card__title-cont'>
                        <RiUser5Fill className='card__title--icon' size={'30'} />
                        <TituloSeccion nombre='Sobre Mí' />
                    </div>

                    <p className='card__description'>
                        Hola! Mi nombre es <strong>Bruno</strong>, nací en la ciudad de Rosario(Santa Fe - Argentina) en 1991. <strong> Soy estudiante de programación y Desarrollador Front-End</strong>.<br />
                        Actualmente me encuentro trabajando en una empresa de telecomunicaciones cómo analista command center.<br /><br />

                        <ul>
                            Algunos de mis hobbies:
                            <li><FaGuitar className='card__description--icon' /> Tocar la guitarra</li>
                            <li><FiCoffee className='card__description--icon' /> El café</li>
                            <li><MdLocalMovies className='card__description--icon' /> Las peliculas de terror</li>
                            <li >
                                <SiApplemusic className='card__description--icon' /> La musica
                            </li>
                        </ul>
                    </p>
                </div>

            </div>
        </div>
    )
}