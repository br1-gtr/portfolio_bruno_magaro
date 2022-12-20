import React from "react";
import { RiUser5Fill } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';
import { GrMail } from 'react-icons/gr';
import '../css/BtnNav.css';

export function BtnNav({ txt }) {
    return (
        <button className='btn'>
            {
                (txt === 'Sobre Mí')
                    ? <RiUser5Fill />
                    : (txt === 'Conocimientos')
                        ? <GiBrain />
                        : <GrMail />
            }
            <h4 className='btn__txt'>{txt}</h4>
        </button>
    )
}