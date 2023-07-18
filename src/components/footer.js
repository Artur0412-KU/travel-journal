import React from "react";
import ReactDOM from "react-dom";
import Youtube from "../img/youtube.png";
import TikTok from "../img/tik-tok.png";
import Instagram from "../img/instagram.png";

export default function Footer() {
    return (
        <div className="footer">
            <h1>Follow me in Social Medias:</h1>
            <div className="social-media">
                <img src={Instagram}></img>
                <img src={TikTok}></img>
                <img src={Youtube}></img>
            </div>
           <p>@2023. All rights reserved</p>
        </div>
    );
}