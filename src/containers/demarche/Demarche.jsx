import React from "react";
import "./demarche.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

function Demarche() {
    
    return(
        <Link to="/demarche">
            <div className="dem-all">
                <div className="dem-title">
                    Demarche
                </div>
                <img className="dem-icon" src={arrow} alt="" />
            </div>
        </Link>
    );
}
export default Demarche;
