import React from "react";
import { TituloSeccion } from "./TituloSeccion";
import proyectosData from '../proyectos.json';
import '../css/MisProyectos.css';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaBootstrap, FaReact, FaSass } from 'react-icons/fa';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
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
                                <div className='proy-card__icons-tec'>
                                    {proy.tecnologias.html && <AiFillHtml5 size={'25'} className='icon' />}
                                    {proy.tecnologias.css && <DiCss3 size={'25'} className='icon' />}
                                    {proy.tecnologias.js && <TbBrandJavascript size={'25'} className='icon' />}
                                    {proy.tecnologias.react && <FaReact size={'25'} className='icon' />}
                                    {proy.tecnologias.bootstrap && <FaBootstrap size={'25'} className='icon' />}
                                    {proy.tecnologias.sass && <FaSass size={'25'} className='icon' />}
                                </div>
                                <div className='proy-card__info'>
                                    <h2 className='proy-card__info--nombre'>{proy.nombre}</h2>
                                    <p>{proy.descripcion}</p>
                                </div>

                                <div className='proy-card__btn'>
                                    <button>
                                        <p>Ir al sitio</p>
                                        <BsArrowUpRightCircleFill size={"26px"} />
                                    </button>
                                    <button>
                                        <p>Repositorio</p>
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