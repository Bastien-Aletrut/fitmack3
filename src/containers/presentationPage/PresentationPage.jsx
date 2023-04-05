import React from "react";
import "./presentationPage.css";
import arrow from "../../assets/arrow.png";

function PresentationPage() {
    document.body.classList.add('col-green')
    document.body.classList.remove('col-grey')
    return(
    <div className="prePage-all">
        <div className="prePage-title">
        Mon Parcours
        </div>
        <img className="prePage-icon" src={arrow} alt="" />
    </div>
    
    );
}
export default PresentationPage;