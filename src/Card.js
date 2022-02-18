import React from "react";
import logo from './logo.svg';

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.online === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
        {console.log(props)}
        {badgeText && <div className="card-tag">{badgeText}</div>}
            <img src={`./${props.coverImg}`}  alt="" className="card--image" />
            <div className="card--stats">
                <img src={logo} alt="logo" className="card--image2" />
                <span className="card--span1">{props.stats.rating}</span>
                <span className="card--span2">({props.stats.reviewCount}) | </span>
                <span className="card--span3">{props.country}</span>
            </div>
            <div className="card--title">
                <p>{props.title}</p>
                <p>From ${props.price} / person</p>
            </div>
        </div>
    )
}
      /*
        img={item.coverImg} 
        rating={item.stats.rating} 
        reviewCount={item.stats.reviewCount} 
        country={item.location}
        title={item.title}
        price={item.price}
        online={item.online}
        openSpots={item.openSpots}

        "id": 1,
        "title": "Learn Wedding Photography",
        "description": "ABC",
        "price": 125,
        "coverImg": "logo192.png",
        "stats": {
            "rating": 5.0,
            "reviewCount": 30
        },
        "location": "USA",
        "openSpots": 0,
        "online": "Online"
      */