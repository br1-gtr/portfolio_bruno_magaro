import React from "react";
import { BtnNav } from './BtnNav.jsx';
import '../css/NavBar.css';

export function NavBar() {

    return (
        <nav className='nav-bar'>
            <BtnNav txt='Sobre Mí' />
            <BtnNav txt='Conocimientos' />
            <BtnNav txt='Proyectos' />
            <BtnNav txt='Contacto' />
        </nav>
    )
} 