import React from "react";
import logo from './logo.svg';

export default function Card(props) {
    return (
        <div className="card">
            <img src={`./${props.img}`}  alt="" className="card--image" />
            <div className="card--stats">
                <img src={logo} alt="logo" className="card--image2" />
                <span className="card--span1">{props.rating}</span>
                <span className="card--span2">({props.reviewCount}) | </span>
                <span className="card--span3">{props.country}</span>
            </div>
            <div className="card--title">
                <p>{props.title}</p>
                <p>From ${props.price} / person</p>
            </div>
        </div>
    )
}
