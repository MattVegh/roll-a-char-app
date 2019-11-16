import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <header className='titles'>
            <h1 className='app-title'>Roll-A-Char</h1>
            <p className='app-subtitle'>Get a head start on character creation!</p>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/characters'>Characters</Link></li>

                </ul>
            </nav>
        </header>
    )
}