import React from "react";
import { BtnNav } from './BtnNav.jsx';
import '../css/NavBar.css';

import { Link as LinkScroll } from 'react-scroll';

export function NavBar() {

    return (
        <nav className='nav-bar'>
            <LinkScroll activeClass="active" to="sobreMi" spy={true} smooth={true} offset={-100} duration={500}>
                <BtnNav txt='Sobre Mí' />
            </LinkScroll>
            <LinkScroll activeClass="active" to="conocimientos" spy={true} smooth={true} offset={-100} duration={500}>
                <BtnNav txt='Conocimientos' />
            </LinkScroll>
            <LinkScroll activeClass="active" to="proyectos" spy={true} smooth={true} offset={-100} duration={500}>
                <BtnNav txt='Proyectos' />
            </LinkScroll>
            <LinkScroll activeClass="active" to="contacto" spy={true} smooth={true} offset={-100} duration={500}>
                <BtnNav txt='Contacto' />
            </LinkScroll>
        </nav>
    )
} 