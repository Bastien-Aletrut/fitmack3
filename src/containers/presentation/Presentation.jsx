import React from "react";
import "./presentation.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

function Presentation() {
    
    return(
        <Link to="/presentation">
            <div className="pre-all">
                <div className="pre-title">
                    Mon Parcours
                </div>
                <img className="pre-icon" src={arrow} alt="" />
            </div>
        </Link>
    );
}
export default Presentation;
