import React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";

import img001 from '../assets/icon-tecnologias/007-html-5.png';
import img002 from '../assets/icon-tecnologias/004-css-3.png';
import img003 from '../assets/icon-tecnologias/009-js.png';
import img004 from '../assets/icon-tecnologias/005-react.png';
import img005 from '../assets/icon-tecnologias/003-sass.png';
import img006 from '../assets/icon-tecnologias/008-bootstrap.png';
import img007 from '../assets/icon-tecnologias/001-figma.png';
import img008 from '../assets/icon-tecnologias/002-command.png';
import img009 from '../assets/icon-tecnologias/006-github.png';
import img010 from '../assets/icon-tecnologias/010-npm.png';


import '../css/Slider.css';

export function Slider() {

    const sliderRef = useRef(null);
    const imgRef = useRef([]);
    const [scrollX, setScrollX] = useState(0);
    const [direction, setDirection] = useState(0.9); //cambia Scroll dependiendo de srollX y Width

    useEffect(() => {

        setTimeout(() => {
            if (scrollX > 500) { //verifica ubicacion de scroll / width
                setDirection(-0.9)
            } else if (scrollX < 0) {
                setDirection(0.9)
            }

            sliderRef.current.scrollLeft = scrollX; //Modfica scroll
            setScrollX(scrollX + direction) //Asigna nuevo valor de scroll
            console.log(direction);
        }, 11)
    }, [scrollX])

    function mouseHandlerIn() {
        setDirection(0)
        console.log('in');
    }
    function mouseHandlerOut() {
        console.log('mouse LEAVE');
        //console.log(direction, 'antes');
        setDirection(0.9) // No funciona...???
        //console.log(direction, 'despues');
        setScrollX(scrollX + 0.9) //Al colocar "direction" no funciona
    }

    return (
        <div className='slider-container'>
            <div className='slider' ref={sliderRef} onMouseEnter={mouseHandlerIn} onMouseLeave={mouseHandlerOut}>
                <img src={img001} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img002} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img003} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img004} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img005} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img006} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img007} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img008} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img009} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
                <img src={img010} alt="" className='slider__img' ref={item => imgRef.current.push(item)} />
            </div>

        </div>
    )
}