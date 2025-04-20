import React from "react";
import richieImage from "./richie.png"

import "./HeroImage.css"


const HeroImage = () => {

    return (
        <div className="hero-container">
        <img src={richieImage}  alt="Richie volando" className="hero-image" />
       </div>
    )
}

export default HeroImage;
