import React from "react";
import Phynks from "../assets/phynks.png"
import Pic from "../assets/Sultane.png"
import Button1 from "../assets/Button.png"
import Button2 from "../assets/Button2.png"

export default function Info(){
    return(
        <div className="info">
            
            <img src={Pic} className="phynks"></img>
            <h1 >Zakaria Maarouf</h1>
            <h4>Frontend Developer</h4>
            <h6><a href="https://www.w3schools.com/">zakaria.website.com</a></h6>
            <a href="https://www.w3schools.com/"><img src={Button1} className="bt1"></img>
            <a href="https://www.w3schools.com/"></a><img src={Button2} className="bt2"></img></a>
            
        </div>
    );
}