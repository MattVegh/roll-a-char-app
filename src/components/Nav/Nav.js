import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <header className="titles">
            <h1 className="app-title">Roll-A-Char</h1>
            <p className="app-subtitle">Get a head start on character creation!</p>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Characters</a></li>

                </ul>
            </nav>
        </header>
    )
}