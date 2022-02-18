import React from 'react';
import logo from './logo.svg';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-main">
            <img src={logo} alt="logo" className="hero--photo" />
            </div>
            <div className="hero--div">
                <h1 className="hero--header">Online Experiences</h1> 
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            
            </div>

        </section>
    )
}