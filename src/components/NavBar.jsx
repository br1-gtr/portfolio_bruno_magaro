import React from "react";
import { RiUser5Fill } from 'react-icons/ri';
import { GiBrain } from 'react-icons/gi';
import { GrMail } from 'react-icons/gr';

import '../css/NavBar.css';

export function NavBar() {
    return (
        <nav className='nav-bar'>
            <RiUser5Fill />
            <GiBrain />
            <GrMail />
        </nav>
    )
}