import React from "react";
import '../css/TituloSeccion.css';

export function TituloSeccion({ nombre }) {
    return (
        <h2 className='title'>{nombre}</h2>
    )
}