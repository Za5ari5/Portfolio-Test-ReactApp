import React from "react";
import Fb from "../assets/Facebook.png";
import Is from "../assets/Instagram.png";
import Tw from "../assets/Twitter.png";
import Gh from "../assets/GitHub.png";

export default function Footer(){
    return(
        <div className="footdiv">
        <footer className="footer">
            <a href="https://www.w3schools.com/"><img src={Tw}></img></a>
            <a href="https://www.w3schools.com/"><img src={Fb}></img></a>
            <a href="https://www.w3schools.com/"><img src={Is}></img></a>
            <a href="https://www.w3schools.com/"><img src={Gh}></img></a>
        </footer>
        </div>
    );
}