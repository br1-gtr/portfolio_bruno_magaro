import React from "react";
import '../css/Footer.css';
import { BsGithub } from 'react-icons/bs';
import { SiVercel, SiNetlify } from 'react-icons/si';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaArrowCircleUp, FaTelegram } from 'react-icons/fa';

export function Footer() {
    const iconSizeContact = 50;
    const iconSize = 35;

    return (
        <footer className='footer'>
            <div className='return-cont'>
                <FaArrowCircleUp size={50} className='return-icon' />
            </div>

            <div className='footer__section-cont'>
                <div className='footer__section'>
                    <div className='footer__title-cont'>
                        <h3>Secciones</h3>
                    </div>
                    <div className='footer__sec-cont'>
                        <p>Inicio</p>
                        <p>Sobre Mi</p>
                        <p>Conocimientos</p>
                        <p>Mis Proyectos</p>
                    </div>
                </div>
                <div className='footer__section-contact left0'>
                    <div className='footer__title-cont'>
                        <h3 className='footer__title-contact'>Contacto</h3>
                    </div>
                    <div className='footer__icon-cont'>
                        <FaLinkedin size={iconSizeContact} />
                        <FaWhatsapp size={iconSizeContact} />
                        <FaTelegram size={iconSizeContact} />
                        <FaInstagram size={iconSizeContact} />
                    </div>
                </div>
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
            </div>
            <div className='footer__info'>
                <p>
                    &copy; 2023 | Desarrollado por Br-1
                </p>
            </div>
        </footer>
    )
}