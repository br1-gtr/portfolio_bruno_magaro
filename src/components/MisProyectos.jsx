import React from "react";
import { TituloSeccion } from "./TituloSeccion";
import proyectosData from '../proyectos.json';
import '../css/MisProyectos.css';
import { AiFillGithub } from 'react-icons/ai';
export function MisProyectos() {

    console.log(proyectosData);

    return (
        <div className='container'>
            <TituloSeccion nombre='Mis Proyectos' />
            <div className='proy-container'>
                {
                    proyectosData.map(proy => {
                        return (
                            <div className='proy-card' key={proy.nombre}>
                                <img src={proy.img} alt="imagen ERROR" />
                                <div className='proy-card__info'>
                                    <h2 className='proy-card__info--nombre'>{proy.nombre}</h2>
                                    <p>Descripcion: {proy.descripcion}</p>
                                </div>

                                <div className='proy-card__btn'>
                                    <button>
                                        <p>Ir al sitio</p>
                                        <AiFillGithub size={"26px"} />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}