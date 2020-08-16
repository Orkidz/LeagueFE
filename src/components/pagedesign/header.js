import React from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa'

function Header() {
    return (
     <div className="header">
             <ul>
                <li style={{float: 'left', color: '#00BFFF', padding: '5px'}}><FaPowerOff style={{width: '60px', height: '60px', padding: '3px'}}></FaPowerOff></li>
                <li style={{float: 'left', color: '#00BFFF', padding: '0px'}}><h1>LoL Randomizer</h1></li>
                <li><a style={{padding: '20px', marginTop: '5px'}} href="#home">ABOUT</a></li>
                <li><a style={{padding: '20px', marginTop: '5px'}} href="#news">CONTACT</a></li>
                <li><a style={{padding: '20px', marginTop: '5px'}} href="#contact">NEWS</a></li>
                <li><a style={{padding: '20px', marginTop: '5px'}} href="#about">HOME</a></li>
            </ul>
    </div>
    )
}


export default Header;