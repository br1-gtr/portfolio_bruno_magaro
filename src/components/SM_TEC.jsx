import React from "react";
import { SobreMi } from './SobreMi.jsx';
import { Tecnologias } from './Tecnologias.jsx';
import '../css/SM_TEC.css';
export function SM_TEC() {
    return (
        <div className='sm-tec-cont'>
            <SobreMi />
            <Tecnologias />
        </div>
    )
}