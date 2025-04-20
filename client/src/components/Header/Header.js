import React from "react";
import { HEADER_TEXT } from "../../utils/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = () => {
  
  return (
    
    <header className="header-magico">
     
     <div className="estrellas-container">
     
     <FontAwesomeIcon icon={faStar} className="estrella" />
      
      <h1>{HEADER_TEXT.text}</h1>
      
      <FontAwesomeIcon icon={faStar} className="estrella"/>
     
     </div>
    
    </header>
  );
};

export default Header;