import React from "react";
import '../css/Header.css';
export function Header() {
    const logoName = '<BrunoMagaro />'
    return (
        <header className='header'>
            <div className='header-data-cont'>
                <h1 className='name'>{logoName}</h1>
                <h1 className='front-end'>Front-End Dev</h1>
            </div>
        </header>
    )
}