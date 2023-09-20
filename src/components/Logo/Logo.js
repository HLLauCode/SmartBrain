import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './artificial-intelligence.png';

const Logo = () => {
    return (
        <div className="m-4 mt-0 flex">
            <Tilt>
            <div 
            className="logocss flex items-center justify-center shadow-lg "
            style={{ height: '150px', width: '150px' }}
            >
                <img src={brain} alt="brain logo" style={{ height: "auto", width: "5rem"}}/>
            </div>
            </Tilt>
        </div>
    )
}

export default Logo;