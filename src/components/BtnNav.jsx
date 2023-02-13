import React from "react";
import { useState } from "react";
import { RiUser5Fill } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

import '../css/BtnNav.css';

export function BtnNav({ txt }) {
    const iconSize = '49px';


    const [positionScroll, setPositionScroll] = useState(false); // check pos de scroll * modif NAV

    const dataScroll = () => {
        if (window.scrollY > window.visualViewport.height) {
            setPositionScroll(true)
        } else {
            setPositionScroll(false)
        }
    }

    window.addEventListener('scroll', dataScroll); // check scroll site

    return (
        <button className={`btnNav ${positionScroll ? 'bgred' : ''}`}>
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