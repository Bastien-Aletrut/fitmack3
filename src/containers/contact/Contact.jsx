import React from "react";
import "./contact.css";

import instalogo from "../../assets/instalogo.png";
const Contact = () => (
  <div className="con-all">
  <div className="con-title">ME CONTACTER</div>
    <div className="con-in">
      <a href="https://www.instagram.com/_fitmack/?hl=fr">
        <div className="con-lien">
            <img className="con-instalogo" src={instalogo} alt="" />
            <div className="con-in-titre">Fitmack</div>
        </div>
      </a>
    </div>
  </div>
);

export default Contact;
