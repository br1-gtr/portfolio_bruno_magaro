import React from "react";
import { TituloSeccion } from "./TituloSeccion";
import { Slider } from './Slider.jsx';
import '../css/Tecnologias.css';
export function Tecnologias() {
    return (
        <div className='container'>
            <div className='tecnologias'>
                <TituloSeccion nombre='Tecnologias' />
                <p className='tecnologias__description'>Algunas de las tecnologias que utilizo y continuo investigando y perfeccionando día a día...</p>
                <Slider />
            </div>
        </div>
    )
}