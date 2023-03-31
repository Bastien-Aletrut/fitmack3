import React from "react";
import "./contact.css";

import instalogo from "../../assets/instalogo.png";
const Contact = () => (
  <div className="con-all">
    <div id="lien">
      <a href="https://www.instagram.com/_fitmack/?hl=fr">
        <div id="lien-reseau">
          <div id="titre2">
            <img id="instalogo" src={instalogo} alt="" />
            <h1>fitmack</h1>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default Contact;
