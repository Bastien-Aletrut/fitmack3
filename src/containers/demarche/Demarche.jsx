import React from "react";
import "./demarche.css";
import { Link } from "react-router-dom";
import logo from "../../assets/chevron.png"
function Demarche() {
    return(
        <Link to="/demarche">
            
            <div className="dem-all">
                <div className="dem-title">
                    DEMARCHE 
                </div>
                <div className="dem-arrow">
                    <img className="dem-icon" src={logo} alt="" />
                    <img className="dem-icon" src={logo} alt="" />
                    <img className="dem-icon" src={logo} alt="" />
                </div>
            </div>
            
        </Link>
    );
}
export default Demarche;
