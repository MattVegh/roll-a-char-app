import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <header className='titles'>
            <div className='header-container'>
                <div className='image-container'>
                    <img className='dragon-header' src={require('../../images/dragon-left.png')}></img>
                </div>

                <div className='title-container'>
                    <h1 className='app-title'>Roll-A-Char</h1>
                    <p className='app-subtitle'>Get a head start on your Dungeons & Dragons character creation!</p>
                    <div className='divider-container'>
                        <img className='divider' src={require('../../images/divider-one.png')}></img>
                    </div>
                    <p className='app-descrition'>This app will help you skip some of the beginning steps when making a character. Input as much or as little as you like and let the generator fill out the rest.</p>
                </div>
                <div className='image-container'>
                    <img className='dragon-header' src={require('../../images/dragon-right.png')}></img>
                </div>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/characters'>Characters</Link></li>
                    <li><Link to='/info'>FAQ</Link></li>

                </ul>
            </nav>
        </header>
    )
}