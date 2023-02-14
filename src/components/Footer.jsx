import React from "react";
import '../css/Footer.css';

import { BsGithub } from 'react-icons/bs';
import { SiVercel, SiNetlify } from 'react-icons/si';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaArrowCircleUp, FaTelegram } from 'react-icons/fa';

import { Link as LinkScroll } from 'react-scroll';

export function Footer() {
    const iconSizeContact = 50;
    const iconSize = 35;

    return (
        <footer className='footer' id="contacto">
            <LinkScroll activeClass="active" to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                <div className='return-cont'>
                    <FaArrowCircleUp size={50} className='return-icon' />
                </div>
            </LinkScroll>


            <div className='footer__section-cont'>
                <div className='footer__section'>
                    <div className='footer__title-cont'>
                        <h3>Secciones</h3>
                    </div>
                    <div className='footer__sec-cont'>
                        <LinkScroll activeClass="active" to="inicio" spy={true} smooth={true} offset={0} duration={500}>
                            <p>Inicio</p>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="sobreMi" spy={true} smooth={true} offset={0} duration={500}>
                            <p>Sobre Mi</p>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="conocimientos" spy={true} smooth={true} offset={0} duration={500}>
                            <p>Conocimientos</p>
                        </LinkScroll>
                        <LinkScroll activeClass="active" to="proyectos" spy={true} smooth={true} offset={0} duration={500}>
                            <p>Mis Proyectos</p>
                        </LinkScroll>

                    </div>
                </div>
                <div className='footer__section-contact left0'>
                    <div className='footer__title-cont'>
                        <h3 className='footer__title-contact'>Contacto</h3>
                    </div>
                    <div className='footer__icon-cont'>
                        <a href="https://www.linkedin.com/in/brunomagaro/" target="_blank">
                            <FaLinkedin size={iconSizeContact} />
                        </a>
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
                        <a href="https://github.com/br1-gtr" target="_blank" >
                            <BsGithub size={iconSize} />
                        </a>
                        <a href="https://vercel.com/dashboard" target="_blank">
                            <SiVercel size={iconSize} />
                        </a>
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