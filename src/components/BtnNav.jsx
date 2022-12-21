import React from "react";
import { RiUser5Fill } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import '../css/BtnNav.css';

export function BtnNav({ txt }) {
    const iconSize = '49px';
    return (
        <button className='btn'>
            {
                (txt === 'Sobre Mí')
                    ? <RiUser5Fill size={iconSize} className='btn__icon' />
                    : (txt === 'Conocimientos')
                        ? <GiBrain size={iconSize} className='btn__icon' />
                        : (txt === 'Proyectos')
                            ? <FaLaptopCode size={iconSize} className='btn__icon' />
                            : <GrMail size={iconSize} className='btn__icon' />
            }
            {/*<p className='btn__txt'>{txt}</p>*/}
        </button>
    )
}