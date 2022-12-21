import React from "react";
import imgSM from '../assets/img/sobre-mi-img.jpg';
import '../css/SobreMi.css';
import { FaSpotify, FaGuitar } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';
import { SiApplemusic } from 'react-icons/si';
import { MdLocalMovies } from 'react-icons/md';
export function SobreMi() {
    return (
        <div className='card'>
            <div className='card__data'>
                <img src={imgSM} alt="" className='card__img' />
                <div>
                    <h2 className='card__title'>Sobre Mí</h2>
                    <p className='card__description'>
                        Hola! Mi nombre es <strong>Bruno</strong>, nací en la ciudad de Rosario(Santa Fe - Argentina) en 1991. <strong> Soy estudiante de programación y Desarrollador Front-End</strong>.<br />
                        Actualmente me encuentro trabajando en una empresa de telecomunicaciones cómo analista command center.<br /><br />

                        <ul>
                            Algunos de mis hobbies:
                            <li><FaGuitar /> Tocar la guitarra</li>
                            <li><FiCoffee /> El café</li>
                            <li><MdLocalMovies /> Las peliculas de terror</li>
                            <li >
                                <SiApplemusic /> La musica... Te comparto mi lista favorita para trabajar/estudiar. <a href="" className='btn-list'>Ir a  <FaSpotify className='icon-spotify' size={'25px'} /></a>
                            </li>
                        </ul>
                    </p>
                </div>

            </div>
        </div>
    )
}