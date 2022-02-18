import React from 'react';
import logo from './logo.svg';

export default function Navbar() {
    return(
        <div>
            <nav>
                <img src={logo} className="nav--logo" alt="logo" />
                <h1 className="nav--title">Dr. Manhattan</h1>
            </nav>
        </div>
    )
}