import React from "react";
import ReactDOM from "react-dom";
import Kyiv from "../img/Rectangle 77.png";


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img}></img>
            <div className="text-desc">
                <div className="location">
                    <img src={props.img2}></img>
                    <p>{props.location}</p>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h1>{props.name}</h1>
                <h3>{props.date}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    );
}