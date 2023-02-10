import React from "react";
import '../css/Footer.css';
import { BsGithub } from 'react-icons/bs';
import { SiVercel, SiNetlify } from 'react-icons/si';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaArrowCircleUp } from 'react-icons/fa';

export function Footer() {
    const iconSize = 45;

    return (
        <footer className='footer'>
            <div className='return-cont'>
                <FaArrowCircleUp size={50} className='return-icon' />
            </div>
            <div className='footer__section-cont'>
                <div className='footer__section left'>
                    <div className='footer__title-cont'>
                        <h3>Mas proyectos</h3>
                    </div>
                    <div className='footer__icon-cont'>
                        <BsGithub size={iconSize} />
                        <SiVercel size={iconSize} />
                        <SiNetlify size={iconSize} />
                    </div>
                </div>
                <div className='footer__section'>
                    <div className='footer__title-cont'>
                        <h3>Contacto</h3>
                    </div>
                    <div className='footer__icon-cont'>
                        <FaLinkedin size={iconSize} />
                        <FaInstagram size={iconSize} />
                        <FaWhatsapp size={iconSize} />
                    </div>
                </div>
            </div>
            <div className='footer__info'>
                <p>
                    &copy; 2023 | Desarrollado por Br-1
                </p>
            </div>
        </footer>
    )
}