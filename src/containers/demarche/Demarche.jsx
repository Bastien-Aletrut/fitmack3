import React from "react";
import "./demarche.css";
import "https://kit.fontawesome.com/c6ee84be12.js";
import { Link } from "react-router-dom";

function Demarche() {
    return(
        <Link to="/demarche">
            <div className="dem-all">
                <div className="dem-title">
                    DEMARCHE 
                </div>
                <span className="dem-arrow">
                    <i className="dem-icon1 fas fa-chevron-right"></i>
                    <i className="dem-icon2 fas fa-chevron-right"></i>
                    <i className="dem-icon3 fas fa-chevron-right"></i>
                </span>
            </div>
        </Link>
    );
}
export default Demarche;
