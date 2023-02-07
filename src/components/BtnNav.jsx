import React from "react";
import { RiUser5Fill } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import '../css/BtnNav.css';

export function BtnNav({ txt }) {
    const iconSize = '49px';
    return (
        <button className='btnNav'>
            {
                (txt === 'Sobre Mí')
                    ? <RiUser5Fill size={iconSize} className='btnNav__icon' />
                    : (txt === 'Conocimientos')
                        ? <GiBrain size={iconSize} className='btnNav__icon' />
                        : (txt === 'Proyectos')
                            ? <FaLaptopCode size={iconSize} className='btnNav__icon' />
                            : <GrMail size={iconSize} className='btnNav__icon' />
            }
            <div className='btnNav__txt-cont'>
                <p>{txt}</p>
            </div>
        </button>
    )
}