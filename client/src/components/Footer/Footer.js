import React from "react";
import { FOOTER_TEXT } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import "./Footer.css"

const Footer = () => {
 return(
  <footer className="footer-magico">
   <hr className="divider-magico" />
   <p className="firma-magica">
    {FOOTER_TEXT.paragraph} {" "}
    <FontAwesomeIcon icon={faHeart} style={{ color: "#ff6ba3" }}/>
    </p>
  </footer>
 );
};

export default Footer;