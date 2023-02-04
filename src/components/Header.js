import React from 'react'
import logo from '../images/logo.JPG'

export default function Header(){
    return(
        <div className='header'>
            <img src= {logo} alt="" className="header-image" />
            <h3>Meme Generator</h3>
        </div>
    )
}