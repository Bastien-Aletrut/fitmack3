import React from "react";
import Prescard from "../prescard/Prescard";
import "./prestation.css";
const Prestation = () => (
  <div id="Prestation" className="pres-all">
    <div className="pres-title">PRESTATION</div>
    <div className="pres-in">
      <Prescard id="Tarif" />
      <Prescard id="Service" />
      <Prescard id="Suivi" />
      <Prescard id="Mon parcour" />
    </div>
  </div>
);
export default Prestation;
