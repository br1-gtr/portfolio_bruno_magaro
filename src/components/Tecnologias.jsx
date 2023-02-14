import React from "react";
import { TituloSeccion } from "./TituloSeccion";
import { GiBrain } from 'react-icons/gi';
import { Slider } from './Slider.jsx';
import '../css/Tecnologias.css';
export function Tecnologias() {
    return (
        <div className='tec__container' id="conocimientos">
            <div className='tec__title-cont'>
                <GiBrain className='tec__title-icon' size={'35'} />
                <TituloSeccion nombre='Conocimientos' />
            </div>
            <p className='tecnologias__description'>
                Comencé mis primeros pasos en la programación hace algunos años con <strong>Raptor</strong>, una aplicación para programar mediante diagramas de flujo. Posteriormente pase a <strong>Java</strong> e incursione en bases de datos con <strong>MySQL</strong>.<br />
                Mi primer acercamiento al desarrollo web fue con <strong>WordPress</strong>. Después investigar un poco esta tecnología inicie con los pilares del Front-End, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>.
                De la mano de CSS conocí <strong>Sass</strong> y varios frameworks de estilado, profundizando principalmente en <strong>Bootstrap</strong>. Por otra parte, JavaScript me llevó a conocer incontables librerías y framworks cómo <strong>ReactJs</strong>.
                Me encuentro expandiendo mis conocimientos dentro del ecosistema del desarrollo Front-End, un universo de herramientas y metodologías que crece día a día.
            </p>
            <Slider />

        </div>
    )
}