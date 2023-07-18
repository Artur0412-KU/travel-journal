import React from "react";
import ReactDOM from "react-dom";
import Logo from '../img/airplane.png';

export default function Header() {
    return(
        <div className="header">
            <img src={Logo}></img>
            <h1>IKnowTravel</h1>
        </div>
    );
}